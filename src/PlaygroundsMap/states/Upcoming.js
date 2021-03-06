import React from "react";
import { Route } from "react-router-dom";
import { AttachedToTop, AttachedToBottom } from "./Base";
import { Header, UpcomingGamesBar, FiltersBar } from "../components";

export default ({ playgrounds, ...props }) => (
  <Route
    {...props}
    render={({ history }) => (
      <>
        <AttachedToTop>
          <Header history={history} title="Upcoming games" />
          <FiltersBar filters={[]} />
        </AttachedToTop>
        <AttachedToBottom>
          <UpcomingGamesBar games={playgrounds} />
        </AttachedToBottom>
      </>
    )}
  />
);
