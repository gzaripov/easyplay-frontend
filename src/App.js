import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom";
import UserApi, { PREFERENCE } from "./api/user";
import Preferences from "./Preferences/index";
import PlaygroundsMap from "./PlaygroundsMap/index";

export const PAGE = {
  preferences: "/preferences",
  map: "/map"
};

function SelectPage({ location: { pathname } }) {
  const hasActivitiesPreference = UserApi.hasPreference(
    PREFERENCE.selectedActivities
  );
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
        <Route path={PAGE.map} component={PlaygroundsMap} />
      </Switch>
    </>
  </Router>
);
