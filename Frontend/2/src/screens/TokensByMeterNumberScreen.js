import React, { useState } from "react";
import { View, Alert, Text } from "react-native";
import axios from "axios";
import InputText from "../components/InputText";
import CustomButton from "../components/CustomButton";
import { validateInteger } from "../utils/validation";

const TokensByMeterNumberScreen = () => {
  const [meterNumber, setMeterNumber] = useState("");
  const [tokens, setTokens] = useState([]);

  const handleGetTokensByMeterNumber = () => {
    // Perform input validation
    if (!validateInput()) {
      Alert.alert("Validation Error", "Please enter a valid meter number");
      return;
    }

    // Send a request to the backend API to get tokens by meter number
    axios
      .get(`http://localhost:3000/api/tokens/tokens/${meterNumber}`)
      .then((response) => {
        const { data } = response;
        setTokens(data);
      })
      .catch((error) => {
        console.error("Error getting tokens:", error);
        let errorMessage = "Failed to get tokens";
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
    return validateInteger(meterNumber);
  };

  return (
    <View>
      <InputText
        placeholder="Enter meter number"
        value={meterNumber}
        onChangeText={setMeterNumber}
      />
      <CustomButton title="Get Tokens" onPress={handleGetTokensByMeterNumber} />
      {tokens.map((token) => (
        <Text
          key={token.id}
        >{`Token: ${token.token}, Status: ${token.token_status}`}</Text>
      ))}
    </View>
  );
};

export default TokensByMeterNumberScreen;
