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

export default function LightOutButton({ onPress, style, disabled }) {
  let lightOutStyle;
  if (style === "red") {
    lightOutStyle = styles.LightOutRed;
  } else if (style === "green") {
    lightOutStyle = styles.LightOutGreen;
  } else {
    lightOutStyle = styles.LightOutOff;
  }
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
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
