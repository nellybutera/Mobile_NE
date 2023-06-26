import React, { useState } from "react";
import { View, Alert } from "react-native";
import axios from "axios";
import InputText from "../components/InputText";
import CustomButton from "../components/CustomButton";
import { validateAlphanumeric } from "../utils/validation";

const ValidateTokenScreen = () => {
  const [token, setToken] = useState("");

  const handleValidateToken = () => {
    // Perform input validation
    if (!validateInput()) {
      Alert.alert("Validation Error", "Please enter a valid token");
      return;
    }

    // Send a request to the backend API to validate a token
    axios
      .post("http://localhost:3000/api/tokens/validate", { token })
      .then((response) => {
        const { data } = response;
        Alert.alert("Token Validated", `Token status: ${data.token_status}`);
      })
      .catch((error) => {
        console.error("Error validating token:", error);
        let errorMessage = "Failed to validate token";
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
    return validateAlphanumeric(token);
  };

  return (
    <View>
      <InputText
        placeholder="Enter token"
        value={token}
        onChangeText={setToken}
      />
      <CustomButton title="Validate Token" onPress={handleValidateToken} />
    </View>
  );
};

export default ValidateTokenScreen;
