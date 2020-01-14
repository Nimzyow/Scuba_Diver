import React, { Fragment } from "react";
import { Picker, StyleSheet } from "react-native";

const UserDialPicker = props => {
  return (
    <Fragment>
      <Picker
        selectedValue={props.value}
        style={styles.position}
        onValueChange={(itemValue, itemIndex) => props.method(itemValue)}
        itemStyle={styles.pickerStyle}
      >
        {props.data}
      </Picker>
    </Fragment>
  );
};

export default UserDialPicker;

const styles = StyleSheet.create({
  position: {
    justifyContent: "center",
    width: 100,
    flex: 1
  },
  pickerStyle: {
    fontSize: 30,
    flex: 1
  }
});
