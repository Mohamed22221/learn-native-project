import React, { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import Colors from "../constants/Colors";

interface StartGameScreenProps {
  pickedNumberHandler: (pickedNumber: number) => void;
}

const StartGameScreen = ({ pickedNumberHandler }: StartGameScreenProps) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(enteredText: string) {
    setEnteredNumber(enteredText);
  }
  function resetInputHandler() {
    setEnteredNumber("");
  }
  function confirmInputHandler() {
    const choosenNumber = Number(enteredNumber);
    if (isNaN(choosenNumber) || choosenNumber > 99 || choosenNumber < 1) {
      Alert.alert("Invalid number", "Number must be between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    pickedNumberHandler(choosenNumber);
    resetInputHandler();
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="numeric"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={numberInputHandler}
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton variant="secondary" onPress={resetInputHandler}>
              Reset
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton variant="primary" onPress={confirmInputHandler}>
              Confirm
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  numberInput: {
    height: 56,
    width: 60,
    fontSize: 32,
    borderBottomColor: Colors.primary600,
    borderBottomWidth: 2,
    color: Colors.primary500,
    marginVertical: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    gap: 8,
  },
  buttonContainer: {
    flex: 1,
  },
});

export default StartGameScreen;
