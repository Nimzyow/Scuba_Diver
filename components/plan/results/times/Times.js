import React from "react";
import { View, Text, StyleSheet } from "react-native";

import TimesItem from "./TimesItem";
import TimesEquation from "./TimesEquation";

const Times = () => {
  return (
    <View style={styles.container}>
      <TimesItem title={"RNT"} value={"0"} />
      <TimesEquation equation={"+"} />
      <TimesItem title={"ABT"} value={"2"} />
      <TimesEquation equation={"="} />
      <TimesItem title={"TBT"} value={"2"} />
    </View>
  );
};

export default Times;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    flex: 1,
    marginBottom: 2
  }
});
