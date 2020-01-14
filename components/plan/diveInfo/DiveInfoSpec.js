import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const DiveInfoSpec = props => {
  return (
    <TouchableOpacity style={styles.boxContainer}>
      <View style={styles.topBox}>
        <Text style={styles.text}>{props.title}</Text>
      </View>
      <View style={styles.bottomBox}>
        <Text style={styles.text}>{props.value}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DiveInfoSpec;

const styles = StyleSheet.create({
  boxContainer: {
    alignContent: "center",
    marginLeft: 5,
    marginRight: 2
  },
  topBox: {
    backgroundColor: "green",
    width: 60,
    paddingTop: 10,
    paddingBottom: 10
  },
  bottomBox: {
    marginTop: 3,
    backgroundColor: "#45CE30",
    width: 60,
    paddingTop: 10,
    paddingBottom: 10
  },
  text: {
    color: "white",
    alignSelf: "center"
  }
});
