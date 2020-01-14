import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TimesItem = props => {
  return (
    <View style={styles.boxItem}>
      <View style={styles.boxTop}>
        <Text style={styles.text}>{props.title}</Text>
      </View>
      <View style={styles.boxBottom}>
        <Text style={styles.textBottom}>{props.value}</Text>
      </View>
    </View>
  );
};

export default TimesItem;

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
    backgroundColor: "#107CB8",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 15,
    color: "white"
  },
  textBottom: {
    fontSize: 40,
    color: "white"
  }
});
