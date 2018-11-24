import React, { Component } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { YMaps, Map, GeoObject, GeolocationControl } from "react-yandex-maps";
import MapsApi from "../api/maps";
import UserApi from "../api/user";
import Waiting from "../modals/Waiting";
import { Main, SearchResults, Upcoming, CreateGame } from "./states";

const FieldsMapContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

export const STATE = {
  main: "/map/find-game",
  searchResults: "/map/search-results",
  upcomingGames: "/map/upcoming-games",
  createGame: "/map/create-game"
};

export default class extends Component {
  state = {
    selectedActivities: [],
    center: [0, 0],
    playgrounds: [],
    position: { type: "Point" },
    zoom: 17
  };

  componentDidMount() {
    UserApi.getSelectedActivities().then(selectedActivities =>
      this.setState({ selectedActivities })
    );
    MapsApi.getCurrentLocation().then(({ latitude, longitude }) => {
      this.setState({ center: [latitude, longitude] });
      UserApi.updateLocation({ latitude, longitude }).then(() => {
        UserApi.getNearestPlaygrounds().then(playgrounds => {
          this.setState({ playgrounds });
        });
      });
    });
  }

  render() {
    const { selectedActivities, playgrounds } = this.state;
    console.log(playgrounds);
    const { match } = this.props;
    //const marks = playgrounds.map(({ location }) => location);
    return (
      <FieldsMapContainer>
        {/* <Waiting title="Searching" /> */}
        <YMaps query={{ lang: "en_US" }}>
          <Map width="100%" height="100%" state={this.state}>
            <GeoObject
              geometry={{
                type: "Point",
                coordinates: this.state.center
              }}
            />
            <GeolocationControl
              options={{ position: { right: 10, bottom: 100 } }}
            />
            {playgrounds.map(({ id, name, location }) => (
              <GeoObject
                key={id}
                hint={name}
                geometry={{
                  type: "Point",
                  coordinates: location
                }}
              />
            ))}
          </Map>
        </YMaps>
        <Router>
          <Switch>
            <Main path={STATE.main} activities={selectedActivities} />
            <SearchResults path={STATE.searchResults} />
            <Upcoming path={STATE.upcomingGames} playgrounds={playgrounds} />
            <CreateGame path={STATE.createGame} />
            <Redirect from="/map" to={STATE.main} />
          </Switch>
        </Router>
      </FieldsMapContainer>
    );
  }
}
