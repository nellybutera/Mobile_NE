import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../constants/colors";

function CustomButton({
  title,
  onPress,
  color = colors.PRIMARY,
  width = "95%",
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, { backgroundColor: color, width: width }]}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.PRIMARY,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    height: 45,
    marginVertical: 5,
  },
  text: {
    color: colors.WHITE,
    fontSize: 15,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
});

export default CustomButton;
