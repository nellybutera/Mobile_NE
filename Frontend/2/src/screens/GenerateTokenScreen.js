import React, { useState } from "react";
import { View, Alert } from "react-native";
import axios from "axios";
import InputText from "../components/InputText";
import CustomButton from "../components/CustomButton";
import Separator from "../components/Separator";
import { validateInteger } from "../utils/validation";
import colors from "../constants/colors";

const GenerateTokenScreen = ({ navigation }) => {
  const [amount, setAmount] = useState("");
  const [meterNumber, setMeterNumber] = useState("");

  const handleGenerateToken = () => {
    // Perform input validation
    if (!validateInput()) {
      Alert.alert(
        "Validation Error",
        "Please enter valid amount and meter number"
      );
      return;
    }

    // Send a request to the backend API to generate a token
    axios
      .post("http://localhost:3000/api/tokens/generate", {
        amount: parseInt(amount),
        meter_number: parseInt(meterNumber),
      })
      .then((response) => {
        const { data } = response;
        Alert.alert("Token Generated", `Token: ${data.token}`);
      })
      .catch((error) => {
        console.error("Error generating token:", error);
        let errorMessage = "Failed to generate token";
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          errorMessage = error.response.data.message;
        }
        Alert.alert("Error", errorMessage);
      });
  };

  const validateInput = () => {
    return validateInteger(amount) && validateInteger(meterNumber);
  };

  return (
    <View style={{ marginHorizontal: 10, marginTop: 50 }}>
      <InputText
        iconName="cash"
        iconColor={colors.GRAY}
        placeholder="Enter amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />
      <InputText
        iconName="countertop-outline"
        iconColor={colors.GRAY}
        placeholder="Enter meter number"
        keyboardType="numeric"
        value={meterNumber}
        onChangeText={setMeterNumber}
      />
      <CustomButton title="GENERATE TOKEN" onPress={handleGenerateToken} />
      <Separator text="OR" />
      <CustomButton
        title="VIEW METER HISTORY"
        onPress={() => navigation.navigate("TokensByMeterNumber")}
      />
    </View>
  );
};

export default GenerateTokenScreen;
