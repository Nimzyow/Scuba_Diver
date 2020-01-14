import React, { Fragment } from "react";
import { View, Text, StyleSheet } from "react-native";

import UserDialHeadingItem from "./UserDialHeadingItem";

const UserDialHeading = () => {
  return (
    <Fragment>
      <UserDialHeadingItem firstText={"DEPTH"} secondText={"(meters)"} />
      <UserDialHeadingItem firstText={"BOTTOM"} secondText={"TIME"} />
      <UserDialHeadingItem firstText={"SURFACE"} secondText={"INTERVAL"} />
    </Fragment>
  );
};

export default UserDialHeading;
