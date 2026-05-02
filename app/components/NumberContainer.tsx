import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";

interface NumberContainerProps {
  children: React.ReactNode;
}

const NumberContainer = ({ children }: NumberContainerProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.primary500,
    padding: 24,
    borderRadius: 8,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary800, // High contrast background
  },
  numberText: {
    color: Colors.primary500,
    fontSize: 36,
    fontWeight: "bold",
  },
});
