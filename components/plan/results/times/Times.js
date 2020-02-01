import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";

import TimesItem from "./TimesItem";
import TimesEquation from "./TimesEquation";

import DiverTableContext from "../../../../context/diverTable/diverTableContext";

const Times = () => {
  const diverTableContext = useContext(DiverTableContext);

  const { rNT, aBT, tBT } = diverTableContext;

  return (
    <View style={styles.container}>
      <TimesItem title={"RNT"} value={rNT} />
      <TimesEquation equation={"+"} />
      <TimesItem title={"ABT"} value={aBT} />
      <TimesEquation equation={"="} />
      <TimesItem title={"TBT"} value={tBT} />
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
