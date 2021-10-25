import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import LightsOut from "../screens/games/lightsOut/LightsOut";
import Levels from "../screens/games/lightsOut/Level";
const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen
        name="lights out"
        component={LightsOut}
        options={{ title: "Lights Out" }}
      />
      <Stack.Screen
        name="level"
        component={Levels}
        options={{ title: "Lights Out" }}
      />
    </Stack.Navigator>
  );
}
