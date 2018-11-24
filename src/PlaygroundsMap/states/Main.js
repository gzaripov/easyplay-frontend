import React from "react";
import { Route } from "react-router-dom";
import { AttachedToTop, AttachedToBottom } from "./Base";
import UserBar from "../UserBar";
import BottomSheet from "../BottomSheet";

export default ({ matchPath, activities, ...props }) => (
  <Route
    {...props}
    render={() => (
      <>
        <AttachedToTop>
          <UserBar />
        </AttachedToTop>
        <AttachedToBottom>
          <BottomSheet activities={activities} />
        </AttachedToBottom>
      </>
    )}
  />
);
