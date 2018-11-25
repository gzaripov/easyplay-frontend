import React from "react";
import { Route } from "react-router-dom";
import { AttachedToTop, AttachedToBottom } from "./Base";
import { FindBar, FiltersBar, UserBar } from "../components";

export default ({ matchPath, activities, onFindGame, ...props }) => (
  <Route
    {...props}
    render={() => (
      <>
        <AttachedToTop>
          <UserBar />
        </AttachedToTop>
        <AttachedToBottom>
          <FiltersBar filters={activities} />
          <FindBar onFindGame={onFindGame} />
        </AttachedToBottom>
      </>
    )}
  />
);
