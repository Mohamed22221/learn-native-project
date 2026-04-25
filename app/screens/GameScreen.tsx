import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Title from "../components/Title";
import Colors from "../constants/Colors";

interface GameScreenProps {
  userNumber: number;
  onGameOver: () => void;
}

const GameScreen = ({ userNumber, onGameOver }: GameScreenProps) => {
  return (
    <SafeAreaView style={styles.screen}>
      <Title>Opponent&apos;s Guess</Title>
      <View style={styles.instructionContainer}>
        <Text style={styles.instructionText}>Higher or Lower?</Text>
      </View>
    </SafeAreaView>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // padding: ,
    alignItems: "center",
  },
  instructionContainer: {
    marginTop: 16,
  },
  instructionText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: "bold",
  },
});
