import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import LightsOut from "../screens/games/LightsOut";
const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="lights out" component={LightsOut} />
    </Stack.Navigator>
  );
}
