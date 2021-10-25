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

export default function LevelButton({ onPress, text, style }) {
  let lightOutStyle;
  let disabled;
  if (style === "green") {
    lightOutStyle = styles.levelGreen;
    disabled = false;
  } else {
    lightOutStyle = styles.levelOff;
    disabled = true;
  }
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <View style={lightOutStyle}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
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
  levelOff: {
    borderRadius: 8,
    backgroundColor: "gray",
    width: (screenWidth - 20) / 4 - 8,
    height: (screenWidth - 20) / 4 - 8,
    margin: 4,
    justifyContent: "center",
  },
  levelGreen: {
    borderRadius: 8,
    backgroundColor: "green",
    width: (screenWidth - 20) / 4 - 8,
    height: (screenWidth - 20) / 4 - 8,
    justifyContent: "center",
    margin: 4,
  },
});
