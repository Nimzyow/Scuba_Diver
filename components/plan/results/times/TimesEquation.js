import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TimesEquation = props => {
  return (
    <View style={styles.boxItem}>
      <Text style={styles.text}>{props.equation}</Text>
    </View>
  );
};

export default TimesEquation;

const styles = StyleSheet.create({
  boxItem: {
    borderWidth: 1,
    borderColor: "black",
    flex: 1,
    marginLeft: 2,
    marginRight: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#26A4ED"
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#164C86"
  }
});
