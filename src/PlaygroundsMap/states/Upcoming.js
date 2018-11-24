import React from "react";
import { Route } from "react-router-dom";
import { AttachedToTop, AttachedToBottom } from "./Base";
import { Header, CreateGameBar, FiltersBar } from "../components";

export default ({ matchPath, playgrounds, ...props }) => (
  <Route
    {...props}
    render={({ history }) => (
      <>
        <AttachedToTop>
          <Header history={history} title="Upcoming games" />
          <FiltersBar filters={[]} />
        </AttachedToTop>
        <AttachedToBottom>
          <CreateGameBar games={playgrounds} />
        </AttachedToBottom>
      </>
    )}
  />
);
