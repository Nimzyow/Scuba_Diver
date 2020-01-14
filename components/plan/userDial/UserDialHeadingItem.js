import React from "react";
import { View, Text, StyleSheet } from "react-native";

const UserDialHeadingItem = props => {
  return (
    <View style={styles.button}>
      <Text style={styles.text}>{props.firstText}</Text>
      <Text style={styles.text}>{props.secondText}</Text>
    </View>
  );
};

export default UserDialHeadingItem;

const styles = StyleSheet.create({
  button: {
    marginTop: 3,
    backgroundColor: "#93006B",
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 5,
    paddingBottom: 5,
    alignItems: "center",
    marginLeft: 2,
    marginRight: 2
  },
  text: {
    color: "white",
    fontSize: 17
  }
});
