import React from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import UserApi, { PREFERENCE } from "./api/user";
import Preferences from "./Preferences";
import FieldsMap from "./FieldsMap";

const PAGE = {
  preferences: "/preferences",
  map: "/map"
};

const App = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #282c34;
`;

function SelectPage() {
  const fields = UserApi.getPreference(PREFERENCE.fields);
  const page = fields ? PAGE.map : PAGE.preferences;
  return <Redirect to={PAGE.map} />;
  //return <Redirect to={page} />;
}

export default () => (
  <Router>
    <>
      <SelectPage />
      <Switch>
        <Route exact path={PAGE.preferences} component={Preferences} />
        <Route exact path={PAGE.map} component={FieldsMap} />
      </Switch>
    </>
  </Router>
);
