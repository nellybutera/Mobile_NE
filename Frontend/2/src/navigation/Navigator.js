import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GenerateTokenScreen from "../screens/GenerateTokenScreen";
import ValidateTokenScreen from "../screens/ValidateTokenScreen";
import TokensByMeterNumberScreen from "../screens/TokensByMeterNumberScreen";
import Header from "../components/Header";
import { View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="GenerateToken"
          component={GenerateTokenScreen}
          options={{
            title: "Generate Token",
          }}
        />
        <Stack.Screen
          name="ValidateToken"
          component={ValidateTokenScreen}
          options={{ title: "Validate Token" }}
        />
        <Stack.Screen
          name="TokensByMeterNumber"
          component={TokensByMeterNumberScreen}
          options={{ title: "Tokens By Meter Number" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
