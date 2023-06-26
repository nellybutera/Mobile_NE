import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import colors from "../constants/colors";

function ToggleButton({
  text1,
  text2,
  onPress1,
  onPress2,
  btn1Active = true,
  btn2Active = false,
}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: btn1Active ? colors.GREENER : colors.WHITE,
            borderRadius: btn1Active ? 10 : 0,
          },
        ]}
        onPress={onPress1}
      >
        <Text
          style={{
            color: btn1Active ? colors.WHITE : colors.BLACK,
            fontSize: 15,
            textAlign: "center",
          }}
        >
          {text1}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: btn2Active ? colors.GREENER : colors.WHITE,
            borderRadius: btn2Active ? 10 : 0,
          },
        ]}
        onPress={onPress2}
      >
        <Text
          style={{
            color: btn2Active ? colors.WHITE : colors.BLACK,
            fontSize: 15,
            textAlign: "center",
          }}
        >
          {text2}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "90%",
    borderRadius: 7,
    height: "100%",
    backgroundColor: colors.LIGHT,
    overflow: "hidden",
    shadowColor: colors.DARKERGRAY,
    shadowOffset: {
      width: 1.0,
      height: 1.0,
    },
    shadowOpacity: 1.0,
    shadowRadius: 25.0,
    elevation: 10,
  },
  button: {
    padding: 15,
    width: "50%",
  },
  containerInput: {
    borderWidth: 1,
    borderRadius: 5,
    height: 45,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    borderColor: colors.LIGHTGRAY,
    marginVertical: 2,
    padding: 10,
    paddingLeft: 10,
  },
  input: {
    paddingLeft: 15,
  },
});
export default ToggleButton;
