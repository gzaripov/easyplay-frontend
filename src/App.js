import React from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom";
import UserApi, { PREFERENCE } from "./api/user";
import Preferences from "./Preferences";
import FieldsMap from "./FieldsMap";

export const PAGE = {
  preferences: "/preferences",
  map: "/map"
};

function SelectPage({ location: { pathname } }) {
  const hasActivitiesPreference = UserApi.hasPreference(PREFERENCE.activities);
  if (!hasActivitiesPreference) {
    const page = PAGE.preferences;
    const isSamePage = page === pathname;
    if (!isSamePage) {
      return <Redirect to={page} />;
    }
  }
  return null;
}

const SelectPageWithRouter = withRouter(SelectPage);

export default () => (
  <Router>
    <>
      <SelectPageWithRouter />
      <Switch>
        <Route exact path={PAGE.preferences} component={Preferences} />
        <Route exact path={PAGE.map} component={FieldsMap} />
      </Switch>
    </>
  </Router>
);
