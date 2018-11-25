import React from "react";
import { Route } from "react-router-dom";
import { AttachedToTop, AttachedToBottom } from "./Base";
import { Header, PlaygroundBar } from "../components";

export default ({ playground, ...props }) => (
  <Route
    {...props}
    render={({ history }) => (
      <>
        <AttachedToTop>
          <Header history={history} title="Search results" />
        </AttachedToTop>
        <AttachedToBottom>
          <PlaygroundBar {...playground} />
        </AttachedToBottom>
      </>
    )}
  />
);
