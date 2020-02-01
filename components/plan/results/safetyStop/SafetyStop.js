import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";

import DiverTableContext from "../../../../context/diverTable/diverTableContext";

const SafetyStop = () => {
  const diverTableContext = useContext(DiverTableContext);
  const { safetyStop } = diverTableContext;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Safety Stop: {safetyStop}</Text>
    </View>
  );
};

export default SafetyStop;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#9F01FB",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 2
  },
  text: {
    color: "white"
  }
});
