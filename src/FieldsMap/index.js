import React, { Component } from "react";
import { YMaps, Map, GeolocationControl } from "react-yandex-maps";
import styled from "styled-components";

const mapState = {
  center: [55.751574, 37.573856],
  zoom: 9
};

const FieldsMapContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default class extends Component {
  render() {
    return (
      <FieldsMapContainer>
        <YMaps>
          <Map width="100%" height="100%" defaultState={mapState}>
            <GeolocationControl
              options={{ position: { right: 10, bottom: 100 } }}
            />
          </Map>
        </YMaps>
      </FieldsMapContainer>
    );
  }
}
