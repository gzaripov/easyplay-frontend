import React from "react";
import { Route } from "react-router-dom";
import { AttachedToTop, AttachedToBottom } from "./Base";
import { Header, CreateGameBar, FiltersBar } from "../components";

export default ({ ...props }) => (
  <Route
    {...props}
    render={({ history }) => (
      <>
        <AttachedToTop>
          <Header history={history} title="Create game" />
        </AttachedToTop>
        <AttachedToBottom>
          <CreateGameBar />
        </AttachedToBottom>
      </>
    )}
  />
);
