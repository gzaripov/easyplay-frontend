import React, { Component } from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { YMaps, Map, GeoObject, GeolocationControl } from "react-yandex-maps";
import MapsApi from "../api/maps";
import UserApi from "../api/user";
import Header from "./Header";
import BottomSheet from "./BottomSheet";
import Waiting from "../modals/Waiting";
import { PAGE } from "../App";
import UserBar from "./UserBar";
import PlaygroundBar from "./PlaygroundBar";

const mapState = {
  center: [55.751574, 37.573856],
  zoom: 9
};

const FieldsMapContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

export default class extends Component {
  state = {
    selectedActivities: [],
    center: [0, 0],
    position: { type: "Point" },
    zoom: 17
  };

  componentDidMount() {
    UserApi.getSelectedActivities().then(selectedActivities =>
      this.setState({ selectedActivities })
    );
    MapsApi.getCurrentLocation().then(({ latitude, longitude }) => {
      this.setState({ center: [latitude, longitude] });
    });
  }

  render() {
    const { selectedActivities } = this.state;
    const { match } = this.props;
    return (
      <FieldsMapContainer>
        {/* <Waiting title="Searching" /> */}
        <YMaps query={{ lang: "en_US" }}>
          <Map
            width="100%"
            height="100%"
            state={this.state}
            defaultState={mapState}
          >
            <GeoObject
              geometry={{
                type: "Point",
                coordinates: this.state.center
              }}
            />
            <GeolocationControl
              options={{ position: { right: 10, bottom: 100 } }}
            />
          </Map>
        </YMaps>
        <Router>
          <Switch>
            <Route
              path={`${match.path}/find-game`}
              render={() => (
                <>
                  <UserBar />
                  <BottomSheet activities={selectedActivities} />
                </>
              )}
            />
            <Route
              path={`${match.path}/search-results`}
              render={({ history }) => (
                <>
                  <Header history={history} title="Search results" />
                  <PlaygroundBar />
                </>
              )}
            />
            <Redirect from="/map" to={`${match.path}/find-game`} />
          </Switch>
        </Router>
      </FieldsMapContainer>
    );
  }
}
