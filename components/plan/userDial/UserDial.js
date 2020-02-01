import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, Picker } from "react-native";

import UserDialHeading from "./UserDialHeading";
import UserDialPicker from "./UserDialPicker";

import DiverTableContext from "../../../context/diverTable/diverTableContext";

const UserDial = props => {
  const {
    depth,
    bottomTime,
    surfaceInterval,
    setDepth,
    setBottomTime,
    setSurfaceInterval
  } = useContext(DiverTableContext);

  let depths = [];
  let bottomTimes = [];
  let surfaceIntervalMinutes = [];
  let surfaceIntervals = [];
  let surfaceIntervalsFinal = [];

  //picker setup depth
  for (let i = 10; i < 43; i++) {
    let convToString = i.toString();
    depths.push(
      <Picker.Item
        key={"depth" + convToString}
        label={convToString}
        value={convToString}
      />
    );
  }
  //picker setup bottom time
  for (let i = 2; i < 201; i++) {
    let convToString = i.toString();
    bottomTimes.push(
      <Picker.Item
        key={"bottomTime" + convToString}
        label={convToString}
        value={convToString}
      />
    );
  }

  //setup hour and minutes surface interval
  for (let i = 0; i < 60; i += 5) {
    let convToString = i.toString();
    if (convToString.length === 1) {
      convToString = "0" + convToString;
    }
    surfaceIntervalMinutes.push(convToString);
  }

  for (let i = 0; i < 6; i++) {
    surfaceIntervalMinutes.map(minute => {
      let convToString = i.toString();
      surfaceIntervals.push(`0${convToString}:${minute}`);
    });
  }

  //picker setup for surface interval
  surfaceIntervals.map(time => {
    surfaceIntervalsFinal.push(
      <Picker.Item key={"surfaceintervals" + time} label={time} value={time} />
    );
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <UserDialHeading />
      </View>
      <View style={styles.dialSetup}>
        <UserDialPicker value={depth} method={setDepth} data={depths} />

        <UserDialPicker
          value={bottomTime}
          method={setBottomTime}
          data={bottomTimes}
        />

        <UserDialPicker
          value={surfaceInterval}
          method={setSurfaceInterval}
          data={surfaceIntervalsFinal}
        />
      </View>
    </View>
  );
};

export default UserDial;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  dialSetup: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  }
});
