import React from "react";
import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";
import Colors from "../../constants/Colors";

interface InstructionTextProps {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}

const InstructionText = ({ children, style }: InstructionTextProps) => {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
