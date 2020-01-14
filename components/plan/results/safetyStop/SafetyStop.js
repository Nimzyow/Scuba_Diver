import React from "react";
import { View, StyleSheet, Text } from "react-native";

const SafetyStop = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Safety Stop: RECOMMENDED</Text>
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
