import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const DiveDetails = () => {
  return (
    <View style={styles.container}>
      <View style={styles.empty}></View>
      <TouchableOpacity style={styles.button}>
        <Text>Dive Details</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DiveDetails;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    marginLeft: 2
  },
  empty: {
    flex: 0.5
  },
  button: {
    borderColor: "black",
    borderWidth: 1,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5
  }
});
