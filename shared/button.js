import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default function FlatButton({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

export function LightOutButton({ onPress, style }) {
  let lightOutStyle;
  if (style === "red") {
    lightOutStyle = styles.LightOutRed;
  } else if (style === "green") {
    lightOutStyle = styles.LightOutGreen;
  } else {
    lightOutStyle = styles.LightOutOff;
  }
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={lightOutStyle}></View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: "#f01d71",
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  LightOutOff: {
    borderRadius: 8,
    backgroundColor: "gray",
    width: (screenWidth - 20) / 5 - 8,
    height: (screenWidth - 20) / 5 - 8,
    margin: 4,
  },
  LightOutGreen: {
    borderRadius: 8,
    backgroundColor: "green",
    width: (screenWidth - 20) / 5 - 8,
    height: (screenWidth - 20) / 5 - 8,
    margin: 4,
  },
  LightOutRed: {
    borderRadius: 8,
    backgroundColor: "red",
    width: (screenWidth - 20) / 5 - 8,
    height: (screenWidth - 20) / 5 - 8,
    margin: 4,
  },
});
