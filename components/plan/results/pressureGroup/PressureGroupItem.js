import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PressureGroupItem = props => {
  return (
    <View style={styles.boxItem}>
      <View style={styles.boxTop}>
        <Text style={styles.text}>{props.titleTop}</Text>
        <Text style={styles.text}>{props.titleBottom}</Text>
      </View>
      <View style={styles.boxBottom}>
        <Text style={styles.textBottom}>{props.value}</Text>
      </View>
    </View>
  );
};

export default PressureGroupItem;

const styles = StyleSheet.create({
  boxItem: {
    flexDirection: "column",
    borderWidth: 1,
    borderColor: "black",
    flex: 1,
    marginLeft: 2,
    marginRight: 2
  },
  boxTop: {
    borderWidth: 1,
    borderColor: "black",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#003A79",
    marginBottom: 2
  },
  boxBottom: {
    borderWidth: 1,
    borderColor: "black",
    flex: 1.5,
    backgroundColor: "#129CEB",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 15,
    color: "white"
  },
  textBottom: {
    fontWeight: "bold",
    fontSize: 40,
    color: "white"
  }
});
