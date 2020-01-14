import React from "react";
import { View, Text, StyleSheet } from "react-native";

import PressureGroupItem from "./PressureGroupItem";

const PressureGroup = () => {
  return (
    <View style={styles.boxContainer}>
      <PressureGroupItem
        titleTop={"Pressure"}
        titleBottom={"Group"}
        value={"A"}
      />
      <PressureGroupItem titleTop={"NDL"} value={"219"} />
      <PressureGroupItem
        titleTop={"Pres.Group"}
        titleBottom={"After S.I."}
        value={"A"}
      />
    </View>
  );
};

export default PressureGroup;

const styles = StyleSheet.create({
  boxContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    flex: 1
  }
});
