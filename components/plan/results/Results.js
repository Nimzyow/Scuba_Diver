import React from "react";
import { View, Text, StyleSheet } from "react-native";

import PressureGroup from "./pressureGroup/PressureGroup";
import SafetyStop from "./safetyStop/SafetyStop";
import Times from "./times/Times";

const Results = () => {
  return (
    <View style={styles.container}>
      <View style={styles.pressureContainer}>
        <PressureGroup />
      </View>
      <View style={styles.safetyStopContainer}>
        <SafetyStop />
      </View>
      <View style={styles.timesContainer}>
        <Times />
      </View>
    </View>
  );
};

export default Results;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1
  },
  pressureContainer: {
    flex: 3
  },
  safetyStopContainer: {
    flex: 1
  },
  timesContainer: {
    flex: 3
  }
});
