import React from "react";
import { View, Text, StyleSheet } from "react-native";
import DiveInfo from "../../plan/diveInfo/DiveInfo";
import UserDial from "../../plan/userDial/UserDial";
import Results from "../../plan/results/Results";

const Plan = () => {
  return (
    <View style={styles.container}>
      <View style={styles.diveDetail}>
        <DiveInfo />
      </View>
      <View style={styles.dial}>
        <UserDial />
      </View>
      <View style={styles.results}>
        <Results />
      </View>
    </View>
  );
};

export default Plan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center"
  },
  diveDetail: {
    flex: 1,
    //borderWidth: 3,
    //borderColor: "purple",
    alignSelf: "stretch",
    justifyContent: "center"
  },
  dial: {
    display: "flex",
    alignSelf: "stretch",
    justifyContent: "space-between",
    flex: 4
    //borderWidth: 3,
    //borderColor: "green"
  },
  results: {
    flex: 3,
    alignSelf: "stretch",
    justifyContent: "space-between"
  }
});
