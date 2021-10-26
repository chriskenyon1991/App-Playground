import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
  Dimensions,
} from "react-native";
import { ForceTouchGestureHandler } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FlatButton from "../../../shared/buttons/button";
import LightOutButton from "../../../shared/buttons/lightOutButton";
import LevelButton from "../../../shared/buttons/levelButton";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default function Levels({ navigation, route }) {
  const [currentLevel, setCurrentLevel] = useState(getCurrentLevel());

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      if (route.params) {
        if (route.params.level > currentLevel) {
          setCurrentLevel(route.params.level);
        }
      }
    });
  });
  async function getCurrentLevel() {
    if (route.params) {
      if (route.params.level) {
        if (route.params.level > currentLevel) {
          setCurrentLevel(route.params.level);
        }
      } else {
        try {
          const level = await AsyncStorage.getItem("level");
          if (level !== null) {
            console.log(level);
            console.log("level");
            setCurrentLevel(level);
          } else {
            console.log("its null");
          }
        } catch (err) {
          console.log(err);
          console.log("in error");
        }
      }
    } else {
      try {
        const level = await AsyncStorage.getItem("level");
        if (level !== null) {
          console.log(level);
          console.log("level");
          setCurrentLevel(level);
        } else {
          console.log("its null");
          setCurrentLevel(1);
        }
      } catch (err) {
        console.log(err);
        console.log("in error");
      }
    }
  }
  function showOpenLevel(buttonLevel) {
    if (buttonLevel <= currentLevel) {
      return "green";
    } else {
      return "off";
    }
  }

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
            style={showOpenLevel(1)}
            text={"1"}
            onPress={() => {
              navigation.navigate("lights out", {
                level: 1,
                lights: lightsOutLevels.one,
                currentLevel,
              });
            }}
          />
          <LevelButton
            style={showOpenLevel(2)}
            text={"2"}
            onPress={() => {
              navigation.navigate("lights out", {
                level: 2,
                lights: lightsOutLevels.two,
                currentLevel,
              });
            }}
          />
          <LevelButton
            style={showOpenLevel(3)}
            text={"3"}
            onPress={() => {
              navigation.navigate("lights out", {
                level: 3,
                lights: lightsOutLevels.three,
                currentLevel,
              });
            }}
          />
          <LevelButton
            style={showOpenLevel(4)}
            text={"4"}
            onPress={() => {
              navigation.navigate("lights out", {
                level: 4,
                lights: lightsOutLevels.four,
                currentLevel,
              });
            }}
          />
        </View>
        <View style={styles.lightRows}>
          <LevelButton
            style={showOpenLevel(5)}
            text={"5"}
            onPress={() => {
              navigation.navigate("lights out", {
                level: 5,
                lights: lightsOutLevels.five,
                currentLevel,
              });
            }}
          />
          <LevelButton
            style={showOpenLevel(6)}
            text={"6"}
            onPress={() => {
              navigation.navigate("lights out", {
                level: 6,
                lights: lightsOutLevels.six,
                currentLevel,
              });
            }}
          />
          <LevelButton
            style={showOpenLevel(7)}
            text={"7"}
            onPress={() => {
              navigation.navigate("lights out", {
                level: 7,
                lights: lightsOutLevels.seven,
                currentLevel,
              });
            }}
          />
          <LevelButton
            style={showOpenLevel(8)}
            text={"8"}
            onPress={() => {
              navigation.navigate("lights out", {
                level: 8,
                lights: lightsOutLevels.eight,
                currentLevel,
              });
            }}
          />
        </View>
        <View style={styles.lightRows}>
          <LevelButton
            style={showOpenLevel(9)}
            text={"9"}
            onPress={() => {
              navigation.navigate("lights out", {
                level: 9,
                lights: lightsOutLevels.nine,
                currentLevel,
              });
            }}
          />
          <LevelButton
            style={showOpenLevel(10)}
            text={"10"}
            onPress={() => {
              navigation.navigate("lights out", {
                level: 10,
                lights: lightsOutLevels.ten,
                currentLevel,
              });
            }}
          />
          <LevelButton
            style={showOpenLevel(11)}
            text={"11"}
            onPress={() => {
              navigation.navigate("lights out", {
                level: 11,
                lights: lightsOutLevels.eleven,
                currentLevel,
              });
            }}
          />
          <LevelButton
            style={showOpenLevel(12)}
            text={"12"}
            onPress={() => {
              navigation.navigate("lights out", {
                level: 12,
                lights: lightsOutLevels.twelve,
                currentLevel,
              });
            }}
          />
        </View>
        <View style={styles.lightRows}>
          <LevelButton
            style={showOpenLevel(13)}
            text={"13"}
            onPress={() => {
              navigation.navigate("lights out", {
                level: 13,
                lights: lightsOutLevels.thirteen,
                currentLevel,
              });
            }}
          />
          <LevelButton
            style={showOpenLevel(14)}
            text={"14"}
            onPress={() => {
              navigation.navigate("lights out", {
                level: 14,
                lights: lightsOutLevels.fourteen,
                currentLevel,
              });
            }}
          />
          <LevelButton
            style={showOpenLevel(15)}
            text={"15"}
            onPress={() => {
              navigation.navigate("lights out", {
                level: 15,
                lights: lightsOutLevels.fithteen,
                currentLevel,
              });
            }}
          />
          <LevelButton
            style={showOpenLevel(16)}
            text={"16"}
            onPress={() => {
              navigation.navigate("lights out", {
                level: 16,
                lights: lightsOutLevels.sixteen,
                currentLevel,
              });
            }}
          />
        </View>
        <View style={styles.lightRows}>
          <LevelButton
            style={showOpenLevel(17)}
            text={"17"}
            onPress={() => {
              navigation.navigate("lights out", {
                level: 17,
                lights: lightsOutLevels.seventeen,
                currentLevel,
              });
            }}
          />
          <LevelButton
            style={showOpenLevel(18)}
            text={"18"}
            onPress={() => {
              navigation.navigate("lights out", {
                level: 18,
                lights: lightsOutLevels.eighteen,
                currentLevel,
              });
            }}
          />
          <LevelButton
            style={showOpenLevel(19)}
            text={"19"}
            onPress={() => {
              navigation.navigate("lights out", {
                level: 19,
                lights: lightsOutLevels.nineteen,
                currentLevel,
              });
            }}
          />
          <LevelButton
            style={showOpenLevel(20)}
            text={"20"}
            onPress={() => {
              navigation.navigate("lights out", {
                level: 20,
                lights: lightsOutLevels.twenty,
                currentLevel,
              });
            }}
          />
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

const lightsOutLevels = {
  one: [
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
  two: [
    "off",
    "red",
    "off",
    "off",
    "off",
    "red",
    "red",
    "off",
    "off",
    "off",
    "off",
    "off",
    "green",
    "off",
    "off",
    "off",
    "off",
    "off",
    "red",
    "red",
    "off",
    "off",
    "off",
    "red",
    "off",
  ],
  three: [
    "off",
    "green",
    "off",
    "off",
    "off",
    "green",
    "green",
    "red",
    "green",
    "off",
    "off",
    "red",
    "red",
    "green",
    "green",
    "off",
    "off",
    "off",
    "off",
    "red",
    "off",
    "off",
    "off",
    "red",
    "off",
  ],
  four: [
    "off",
    "off",
    "green",
    "off",
    "off",
    "off",
    "green",
    "off",
    "green",
    "off",
    "off",
    "off",
    "off",
    "off",
    "off",
    "green",
    "green",
    "green",
    "green",
    "green",
    "off",
    "green",
    "off",
    "green",
    "off",
  ],
  five: [
    "red",
    "red",
    "off",
    "off",
    "off",
    "red",
    "green",
    "off",
    "off",
    "off",
    "green",
    "green",
    "green",
    "off",
    "off",
    "red",
    "green",
    "off",
    "off",
    "off",
    "red",
    "red",
    "off",
    "off",
    "off",
  ],
  six: [
    "red",
    "red",
    "red",
    "off",
    "off",
    "off",
    "red",
    "red",
    "off",
    "off",
    "off",
    "red",
    "red",
    "red",
    "off",
    "off",
    "off",
    "red",
    "red",
    "off",
    "off",
    "off",
    "red",
    "red",
    "red",
  ],
  seven: [
    "off",
    "red",
    "off",
    "off",
    "off",
    "red",
    "red",
    "green",
    "off",
    "off",
    "off",
    "green",
    "red",
    "green",
    "off",
    "off",
    "off",
    "green",
    "red",
    "red",
    "off",
    "off",
    "off",
    "red",
    "off",
  ],
  eight: [
    "red",
    "green",
    "green",
    "off",
    "off",
    "green",
    "red",
    "off",
    "off",
    "off",
    "red",
    "off",
    "off",
    "off",
    "green",
    "green",
    "red",
    "off",
    "red",
    "green",
    "red",
    "green",
    "red",
    "green",
    "red",
  ],
  nine: [
    "off",
    "green",
    "green",
    "green",
    "off",
    "off",
    "green",
    "off",
    "green",
    "off",
    "green",
    "off",
    "green",
    "off",
    "green",
    "off",
    "green",
    "off",
    "green",
    "off",
    "off",
    "green",
    "green",
    "green",
    "off",
  ],
  ten: [
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
    "green",
    "off",
    "off",
    "off",
    "green",
    "red",
    "green",
    "off",
    "off",
    "red",
    "green",
    "red",
    "off",
    "off",
  ],
  eleven: [
    "red",
    "off",
    "green",
    "off",
    "red",
    "red",
    "off",
    "off",
    "off",
    "red",
    "off",
    "red",
    "red",
    "red",
    "off",
    "off",
    "off",
    "red",
    "off",
    "off",
    "off",
    "off",
    "off",
    "off",
    "off",
  ],
  twelve: [
    "off",
    "red",
    "off",
    "off",
    "off",
    "red",
    "off",
    "off",
    "green",
    "off",
    "green",
    "green",
    "off",
    "green",
    "green",
    "off",
    "green",
    "off",
    "off",
    "red",
    "off",
    "off",
    "off",
    "red",
    "off",
  ],
  thirteen: [
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
    "red",
    "off",
    "off",
    "off",
    "red",
    "off",
    "red",
    "off",
    "off",
    "red",
    "red",
    "red",
    "off",
    "off",
  ],
  fourteen: [
    "red",
    "red",
    "red",
    "red",
    "red",
    "off",
    "off",
    "off",
    "off",
    "off",
    "off",
    "red",
    "off",
    "red",
    "off",
    "off",
    "off",
    "red",
    "off",
    "off",
    "off",
    "off",
    "off",
    "off",
    "off",
  ],
  fithteen: [
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
    "green",
    "off",
    "off",
    "off",
    "green",
    "off",
    "green",
    "green",
    "green",
    "off",
    "off",
    "off",
    "green",
    "off",
    "off",
  ],
  sixteen: [
    "red",
    "green",
    "red",
    "green",
    "red",
    "green",
    "red",
    "off",
    "red",
    "green",
    "red",
    "off",
    "off",
    "off",
    "red",
    "green",
    "red",
    "off",
    "red",
    "green",
    "red",
    "green",
    "red",
    "green",
    "red",
  ],
  seventeen: [
    "off",
    "red",
    "red",
    "red",
    "off",
    "off",
    "red",
    "red",
    "red",
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
    "off",
  ],
  eighteen: [
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
  ],
  nineteen: [
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
  ],
  twenty: [
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
  ],
};
