import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
  Dimensions,
} from "react-native";
import { ForceTouchGestureHandler } from "react-native-gesture-handler";
import { useState } from "react/cjs/react.development";

import FlatButton from "../../../shared/buttons/button";
import LightOutButton from "../../../shared/buttons/lightOutButton";
import LevelButton from "../../../shared/buttons/levelButton";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default function Levels({ navigation }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: screenWidth - 20,
          marginTop: 20,
          //    backgroundColor: "gray",
          height: screenWidth - 20,
        }}
      >
        <View style={styles.lightRows}>
          <LevelButton
            style={"green"}
            text={"1"}
            onPress={() => {
              navigation.navigate("lights out", {
                level: 1,
                lights: [
                  "off",
                  "off",
                  "off",
                  "off",
                  "off",
                  "off",
                  "off",
                  "off",
                  "off",
                  "off",
                  "off",
                  "off",
                  "off",
                  "off",
                  "off",
                  "red",
                  "off",
                  "green",
                  "off",
                  "red",
                  "red",
                  "off",
                  "green",
                  "off",
                  "red",
                ],
              });
            }}
          />
          <LevelButton style={"off"} text={"2"} />
          <LevelButton style={"off"} text={"3"} />
          <LevelButton style={"off"} text={"4"} />
        </View>
        <View style={styles.lightRows}>
          <LevelButton style={"off"} text={"5"} />
          <LevelButton style={"off"} text={"6"} />
          <LevelButton style={"off"} text={"7"} />
          <LevelButton style={"off"} text={"8"} />
        </View>
        <View style={styles.lightRows}>
          <LevelButton style={"off"} text={"9"} />
          <LevelButton style={"off"} text={"10"} />
          <LevelButton style={"off"} text={"11"} />
          <LevelButton style={"off"} text={"12"} />
        </View>
        <View style={styles.lightRows}>
          <LevelButton style={"off"} text={"13"} />
          <LevelButton style={"off"} text={"14"} />
          <LevelButton style={"off"} text={"15"} />
          <LevelButton style={"off"} text={"16"} />
        </View>
        <View style={styles.lightRows}>
          <LevelButton style={"off"} text={"17"} />
          <LevelButton style={"off"} text={"18"} />
          <LevelButton style={"off"} text={"19"} />
          <LevelButton style={"off"} text={"20"} />
        </View>
      </View>
      <View style={{ width: screenWidth - 20, marginTop: 50 }}></View>

      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    // justifyContent: "center",
  },
  lightRows: {
    height: (screenWidth - 20) / 4,
    width: screenWidth - 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  text: {
    fontSize: 22,
  },
});
