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

function SelectPage({ location: { pathname } }) {
  const fields = UserApi.getPreference(PREFERENCE.fields);
  const page = fields ? PAGE.map : PAGE.preferences;
  const isSamePage = page === pathname;
  if (!isSamePage) {
    return <Redirect to={page} />;
  }
  return null;
}

export default () => (
  <Router>
    <Switch>
      <SelectPage />
      <Route exact path={PAGE.preferences} component={Preferences} />
      <Route exact path={PAGE.map} component={FieldsMap} />
    </Switch>
  </Router>
);
