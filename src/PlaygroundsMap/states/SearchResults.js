import React from "react";
import { Route } from "react-router-dom";
import { AttachedToTop, AttachedToBottom } from "./Base";
import Header from "../Header";
import PlaygroundBar from "../PlaygroundBar";

export default ({ matchPath, playground, ...props }) => (
  <Route
    {...props}
    render={({ history }) => (
      <>
        {console.log(props) || ""}
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
