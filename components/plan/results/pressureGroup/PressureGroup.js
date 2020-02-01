import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";

import PressureGroupItem from "./PressureGroupItem";
import DiverTableContext from "../../../../context/diverTable/diverTableContext";

const PressureGroup = () => {
  const diverTableContext = useContext(DiverTableContext);
  const {
    pressureGroupCategory,
    pressureGroupAfterSICategory
  } = diverTableContext;

  return (
    <View style={styles.boxContainer}>
      <PressureGroupItem
        titleTop={"Pressure"}
        titleBottom={"Group"}
        value={pressureGroupCategory}
      />
      <PressureGroupItem titleTop={"NDL"} value={"219"} />
      <PressureGroupItem
        titleTop={"Pres.Group"}
        titleBottom={"After S.I."}
        value={pressureGroupAfterSICategory}
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
