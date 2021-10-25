import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
  Dimensions,
} from "react-native";
import FlatButton from "../shared/button";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ width: screenWidth - 20, marginTop: 20 }}>
        <FlatButton
          onPress={() => {
            navigation.navigate("lights out");
          }}
          text={"Lights out game"}
        />
      </View>

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
});
