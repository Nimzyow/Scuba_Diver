import React, { Fragment } from "react";
import { View, Text, StyleSheet } from "react-native";

import DiveInfoSpec from "./DiveInfoSpec";
import DiveDetails from "./DiveDetails";

const DiveInfo = () => {
  return (
    <View style={{ display: "flex", flexDirection: "row" }}>
      <DiveInfoSpec title="FO2" value="21%" />
      <DiveInfoSpec title="PPO2" value="1.4" />
      <DiveInfoSpec title="MOD" value="57" />
      <DiveDetails />
    </View>
  );
};

export default DiveInfo;
