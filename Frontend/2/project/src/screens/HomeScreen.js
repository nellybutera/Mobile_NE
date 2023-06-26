import React from "react";
import { View, Button, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  const handleValidateTokenPress = () => {
    navigation.navigate("ValidateToken");
  };

  const handleViewMeterHistoryPress = () => {
    navigation.navigate("TokensByMeterNumber");
  };

  return (
    <View style={styles.container}>
      <Button
        title="Generate Token"
        onPress={() => navigation.navigate("GenerateToken")}
      />
      <View style={styles.buttonContainer}>
        <Button title="Validate Token" onPress={handleValidateTokenPress} />
        <Button
          title="View Meter History"
          onPress={handleViewMeterHistoryPress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    marginTop: 16,
  },
});

export default HomeScreen;
