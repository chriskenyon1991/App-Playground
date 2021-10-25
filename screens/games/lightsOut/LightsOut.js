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
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default function LightsOut(props) {
  let array = props.route.params.lights;
  const [oneOne, setOneOne] = useState(array[0]);
  const [oneTwo, setOneTwo] = useState(array[1]);
  const [oneThree, setOneThree] = useState(array[2]);
  const [oneFour, setOneFour] = useState(array[3]);
  const [oneFive, setOneFive] = useState(array[4]);

  const [twoOne, setTwoOne] = useState(array[5]);
  const [twoTwo, setTwoTwo] = useState(array[6]);
  const [twoThree, setTwoThree] = useState(array[7]);
  const [twoFour, setTwoFour] = useState(array[8]);
  const [twoFive, setTwoFive] = useState(array[9]);

  const [threeOne, setThreeOne] = useState(array[10]);
  const [threeTwo, setThreeTwo] = useState(array[11]);
  const [threeThree, setThreeThree] = useState(array[12]);
  const [threeFour, setThreeFour] = useState(array[13]);
  const [threeFive, setThreeFive] = useState(array[14]);

  const [fourOne, setFourOne] = useState(array[15]);
  const [fourTwo, setFourTwo] = useState(array[16]);
  const [fourThree, setFourThree] = useState(array[17]);
  const [fourFour, setFourFour] = useState(array[18]);
  const [fourFive, setFourFive] = useState(array[19]);

  const [fiveOne, setFiveOne] = useState(array[20]);
  const [fiveTwo, setFiveTwo] = useState(array[21]);
  const [fiveThree, setFiveThree] = useState(array[22]);
  const [fiveFour, setFiveFour] = useState(array[23]);
  const [fiveFive, setFiveFive] = useState(array[24]);

  const [counter, setCounter] = useState(0);

  function changeColor(color) {
    let newColor;
    if (color === "red") {
      newColor = "green";
    } else if (color === "green") {
      newColor = "off";
    } else {
      newColor = "red";
    }
    return newColor;
  }

  function reset() {
    setOneOne(array[0]);
    setOneTwo(array[1]);
    setOneThree(array[2]);
    setOneFour(array[3]);
    setOneFive(array[4]);

    setTwoOne(array[5]);
    setTwoTwo(array[6]);
    setTwoThree(array[7]);
    setTwoFour(array[8]);
    setTwoFive(array[9]);

    setThreeOne(array[10]);
    setThreeTwo(array[11]);
    setThreeThree(array[12]);
    setThreeFour(array[13]);
    setThreeFive(array[14]);

    setFourOne(array[15]);
    setFourTwo(array[16]);
    setFourThree(array[17]);
    setFourFour(array[18]);
    setFourFive(array[19]);

    setFiveOne(array[20]);
    setFiveTwo(array[21]);
    setFiveThree(array[22]);
    setFiveFour(array[23]);
    setFiveFive(array[24]);

    setCounter(0);
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
        <Text style={styles.text}>Moves: {counter}</Text>
        <View style={styles.lightRows}>
          <LightOutButton
            style={oneOne}
            onPress={() => {
              console.log(props);
              setOneOne(changeColor(oneOne));
              setOneTwo(changeColor(oneTwo));
              setTwoOne(changeColor(twoOne));
              setCounter(counter + 1);
            }}
          />
          <LightOutButton
            style={oneTwo}
            onPress={() => {
              setOneOne(changeColor(oneOne));
              setOneTwo(changeColor(oneTwo));
              setOneThree(changeColor(oneThree));
              setTwoTwo(changeColor(twoTwo));
              setCounter(counter + 1);
            }}
          />
          <LightOutButton
            style={oneThree}
            onPress={() => {
              setOneTwo(changeColor(oneTwo));
              setOneThree(changeColor(oneThree));
              setOneFour(changeColor(oneFour));
              setTwoThree(changeColor(twoThree));
              setCounter(counter + 1);
            }}
          />
          <LightOutButton
            style={oneFour}
            onPress={() => {
              setOneThree(changeColor(oneThree));
              setOneFour(changeColor(oneFour));
              setOneFive(changeColor(oneFive));
              setTwoFour(changeColor(twoFour));
              setCounter(counter + 1);
            }}
          />
          <LightOutButton
            style={oneFive}
            onPress={() => {
              setOneFour(changeColor(oneFour));
              setOneFive(changeColor(oneFive));
              setTwoFive(changeColor(twoFive));
              setCounter(counter + 1);
            }}
          />
        </View>
        <View style={styles.lightRows}>
          <LightOutButton
            style={twoOne}
            onPress={() => {
              setOneOne(changeColor(oneOne));
              setTwoOne(changeColor(twoOne));
              setTwoTwo(changeColor(twoTwo));
              setThreeOne(changeColor(threeOne));
              setCounter(counter + 1);
            }}
          />
          <LightOutButton
            style={twoTwo}
            onPress={() => {
              setOneTwo(changeColor(oneTwo));
              setTwoOne(changeColor(twoOne));
              setTwoTwo(changeColor(twoTwo));
              setTwoThree(changeColor(twoThree));
              setThreeTwo(changeColor(threeTwo));
              setCounter(counter + 1);
            }}
          />
          <LightOutButton
            style={twoThree}
            onPress={() => {
              setOneThree(changeColor(oneThree));
              setTwoTwo(changeColor(twoTwo));
              setTwoThree(changeColor(twoThree));
              setTwoFour(changeColor(twoFour));
              setThreeThree(changeColor(threeThree));
              setCounter(counter + 1);
            }}
          />
          <LightOutButton
            style={twoFour}
            onPress={() => {
              setOneFour(changeColor(oneFour));
              setTwoThree(changeColor(twoThree));
              setTwoFour(changeColor(twoFour));
              setTwoFive(changeColor(twoFive));
              setThreeFour(changeColor(threeFour));
              setCounter(counter + 1);
            }}
          />
          <LightOutButton
            style={twoFive}
            onPress={() => {
              setOneFive(changeColor(oneFive));
              setTwoFour(changeColor(twoFour));
              setTwoFive(changeColor(twoFive));
              setThreeFive(changeColor(threeFive));
              setCounter(counter + 1);
            }}
          />
        </View>
        <View style={styles.lightRows}>
          <LightOutButton
            style={threeOne}
            onPress={() => {
              setTwoOne(changeColor(twoOne));
              setThreeOne(changeColor(threeOne));
              setThreeTwo(changeColor(threeTwo));
              setFourOne(changeColor(fourOne));
              setCounter(counter + 1);
            }}
          />
          <LightOutButton
            style={threeTwo}
            onPress={() => {
              setTwoTwo(changeColor(twoTwo));
              setThreeOne(changeColor(threeOne));
              setThreeTwo(changeColor(threeTwo));
              setThreeThree(changeColor(threeThree));
              setFourTwo(changeColor(fourTwo));
              setCounter(counter + 1);
            }}
          />
          <LightOutButton
            style={threeThree}
            onPress={() => {
              setTwoThree(changeColor(twoThree));
              setThreeTwo(changeColor(threeTwo));
              setThreeThree(changeColor(threeThree));
              setThreeFour(changeColor(threeFour));
              setFourThree(changeColor(fourThree));
              setCounter(counter + 1);
            }}
          />
          <LightOutButton
            style={threeFour}
            onPress={() => {
              setTwoFour(changeColor(twoFour));
              setThreeThree(changeColor(threeThree));
              setThreeFour(changeColor(threeFour));
              setThreeFive(changeColor(threeFive));
              setFourFour(changeColor(fourFour));
              setCounter(counter + 1);
            }}
          />
          <LightOutButton
            style={threeFive}
            onPress={() => {
              setTwoFive(changeColor(twoFive));
              setThreeFour(changeColor(threeFour));
              setThreeFive(changeColor(threeFive));
              setFourFive(changeColor(fourFive));
              setCounter(counter + 1);
            }}
          />
        </View>
        <View style={styles.lightRows}>
          <LightOutButton
            style={fourOne}
            onPress={() => {
              setThreeOne(changeColor(threeOne));
              setFourOne(changeColor(fourOne));
              setFourTwo(changeColor(fourTwo));
              setFiveOne(changeColor(fiveOne));
              setCounter(counter + 1);
            }}
          />
          <LightOutButton
            style={fourTwo}
            onPress={() => {
              setThreeTwo(changeColor(threeTwo));
              setFourOne(changeColor(fourOne));
              setFourTwo(changeColor(fourTwo));
              setFourThree(changeColor(fourThree));
              setFiveTwo(changeColor(fiveTwo));
              setCounter(counter + 1);
            }}
          />
          <LightOutButton
            style={fourThree}
            onPress={() => {
              setThreeThree(changeColor(threeThree));
              setFourTwo(changeColor(fourTwo));
              setFourThree(changeColor(fourThree));
              setFourFour(changeColor(fourFour));
              setFiveThree(changeColor(fiveThree));
              setCounter(counter + 1);
            }}
          />
          <LightOutButton
            style={fourFour}
            onPress={() => {
              setThreeFour(changeColor(threeFour));
              setFourThree(changeColor(fourThree));
              setFourFour(changeColor(fourFour));
              setFourFive(changeColor(fourFive));
              setFiveFour(changeColor(fiveFour));
              setCounter(counter + 1);
            }}
          />
          <LightOutButton
            style={fourFive}
            onPress={() => {
              setThreeFive(changeColor(threeFive));
              setFourFour(changeColor(fourFour));
              setFourFive(changeColor(fourFive));
              setFiveFive(changeColor(fiveFive));
              setCounter(counter + 1);
            }}
          />
        </View>
        <View style={styles.lightRows}>
          <LightOutButton
            style={fiveOne}
            onPress={() => {
              setFiveOne(changeColor(fiveOne));
              setFiveTwo(changeColor(fiveTwo));
              setFourOne(changeColor(fourOne));
              setCounter(counter + 1);
            }}
          />
          <LightOutButton
            style={fiveTwo}
            onPress={() => {
              setFourTwo(changeColor(fourTwo));
              setFiveOne(changeColor(fiveOne));
              setFiveTwo(changeColor(fiveTwo));
              setFiveThree(changeColor(fiveThree));
              setCounter(counter + 1);
            }}
          />
          <LightOutButton
            style={fiveThree}
            onPress={() => {
              setFourThree(changeColor(fourThree));
              setFiveTwo(changeColor(fiveTwo));
              setFiveThree(changeColor(fiveThree));
              setFiveFour(changeColor(fiveFour));
              setCounter(counter + 1);
            }}
          />
          <LightOutButton
            style={fiveFour}
            onPress={() => {
              setFourFour(changeColor(fourFour));
              setFiveThree(changeColor(fiveThree));
              setFiveFour(changeColor(fiveFour));
              setFiveFive(changeColor(fiveFive));
              setCounter(counter + 1);
            }}
          />
          <LightOutButton
            style={fiveFive}
            onPress={() => {
              setFourFive(changeColor(fourFive));
              setFiveFour(changeColor(fiveFour));
              setFiveFive(changeColor(fiveFive));
              setCounter(counter + 1);
            }}
          />
        </View>
      </View>
      <View style={{ width: screenWidth - 20, marginTop: 50 }}>
        <FlatButton
          onPress={() => {
            reset();
            console.log("tapped");
          }}
          text={"Restart game"}
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
  lightRows: {
    height: (screenWidth - 20) / 5,
    width: screenWidth - 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  text: {
    fontSize: 22,
  },
});