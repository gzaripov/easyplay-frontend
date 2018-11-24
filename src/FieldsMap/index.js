import React, { Component } from "react";
import { YMaps, Map, GeoObject, GeolocationControl } from "react-yandex-maps";
import styled from "styled-components";
import MapsApi from "../api/maps";
import Header from "./Header";
import BottomSheet from "./BottomSheet";
import Waiting from "../modals/Waiting";

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
    center: [0, 0],
    position: { type: "Point" },
    zoom: 17
  };

  componentDidMount() {
    MapsApi.getCurrentLocation().then(({ latitude, longitude }) => {
      this.setState({ center: [latitude, longitude] });
    });
  }

  render() {
    return (
      <FieldsMapContainer>
        <Waiting title="Searching..." />
        <Header />
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
        <BottomSheet />
      </FieldsMapContainer>
    );
  }
}
