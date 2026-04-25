import * as Haptics from "expo-haptics";
import React from "react";
import {
  Platform,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import Colors from "../constants/Colors";

export type ButtonVariant = "primary" | "secondary" | "success" | "danger";

interface PrimaryButtonProps {
  children: React.ReactNode;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  variant?: ButtonVariant;
}

function PrimaryButton({
  children,
  onPress,
  style,
  variant = "primary",
}: PrimaryButtonProps) {
  // Determine standard colors based on variant
  let backgroundColor = Colors.primary500;
  let pressedColor = Colors.primary600;
  let textColor = Colors.primary800;
  let rippleColor = Colors.primary600;

  if (variant === "secondary") {
    backgroundColor = Colors.secondary500;
    pressedColor = Colors.secondary600;
    textColor = Colors.white;
    rippleColor = Colors.secondary600;
  } else if (variant === "success") {
    backgroundColor = Colors.success500;
    pressedColor = Colors.success600;
    textColor = Colors.white;
    rippleColor = Colors.success600;
  } else if (variant === "danger") {
    backgroundColor = Colors.danger500;
    pressedColor = Colors.danger600;
    textColor = Colors.white;
    rippleColor = Colors.danger600;
  }

  function pressHandler() {
    if (Platform.OS !== "web") {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    onPress();
  }

  return (
    <View style={[styles.buttonOuterContainer, style]}>
      <Pressable
        style={({ pressed }) => [
          styles.buttonInnerContainer,
          {
            backgroundColor:
              pressed && Platform.OS === "ios" ? pressedColor : backgroundColor,
            // transform: [{ scale: pressed ? 0.98 : 1 }],
          },
          pressed && Platform.OS === "android" && styles.pressed,
        ]}
        onPress={pressHandler}
        android_ripple={{ color: rippleColor }}
      >
        <Text style={[styles.buttonText, { color: textColor }]}>
          {children}
        </Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
  buttonInnerContainer: {
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  pressed: {
    opacity: 0.75,
  },
});
