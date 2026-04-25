import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";

interface TitleProps {
  children: string;
}

function Title({ children }: TitleProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}

export default Title;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.white,
    padding: 12,
    borderRadius: 8,
    marginVertical: 12,
    width: "100%",
    maxWidth: "80%",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.white,
    textAlign: "center",
  },
});
