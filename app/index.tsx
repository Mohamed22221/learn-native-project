import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Colors from "./constants/Colors";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";
export default function WelcomeScreen() {
  const [userNumber, setUserNumber] = useState<number | null>(null);

  function pickedNumberHandler(pickedNumber: number) {
    setUserNumber(pickedNumber);
  }
  let screen = <StartGameScreen pickedNumberHandler={pickedNumberHandler} />;
  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={() => {}} />;
  }
  return (
    <SafeAreaProvider style={styles.container}>
      <View style={styles.container}>
        <StatusBar style="dark" />
        <LinearGradient
          colors={[Colors.primary800, Colors.primary700, Colors.secondary700]}
          style={styles.gradient}
        >
          <ImageBackground
            source={{
              uri: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&w=1000",
            }}
            resizeMode="cover"
            style={styles.container}
            imageStyle={styles.blurView}
          >
            <View style={styles.gameScreenContainer}>{screen}</View>

            <Animated.View
              entering={FadeInUp.delay(1000).duration(1000)}
            ></Animated.View>
          </ImageBackground>
        </LinearGradient>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary700,
  },
  gradient: {
    flex: 1,
  },
  blurView: {
    opacity: 0.03,
  },
  gameScreenContainer: {
    flex: 1,
    padding: 16,
  },
});
