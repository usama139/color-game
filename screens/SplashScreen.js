import React, { useEffect } from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily } from "../GlobalStyles";

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('EnterNameScreen'); // Ensure this matches the screen name in your navigator
    }, 3000); // 3000 milliseconds = 3 seconds

    return () => clearTimeout(timer); // Clear the timer if the component unmounts
  }, [navigation]);

  return (
    <ImageBackground
      style={styles.splashscreenIcon}
      resizeMode="cover"
      source={require("../assets/splashscreen.png")}
    >
      <View style={[styles.logo, styles.logoPosition]}>
        <Image
          style={styles.logoIcon}
          contentFit="cover"
          source={require("../assets/logo.png")}
        />
        <Text style={[styles.colorsGame, styles.logoPosition]}>
          COLOR GAME
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  logoPosition: {
    width: 319,
    left: "50%",
    position: "absolute",
  },
  logoIcon: {
    marginLeft: -24.5,
    top: 0,
    borderRadius: 50,
    width: 50,
    height: 50,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  colorsGame: {
    marginLeft: -159.5,
    top: 87,
    fontSize: FontSize.size_21xl,
    letterSpacing: 8,
    fontStyle: "italic",
    fontFamily: FontFamily.interLight,
    textAlign: "center",
    height: 99,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
  },
  logo: {
    marginLeft: -160,
    top: 256,
    height: 186,
  },
  splashscreenIcon: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default SplashScreen;
