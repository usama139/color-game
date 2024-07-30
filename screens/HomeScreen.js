import React, { useState, useCallback, useEffect, useRef } from "react";
import { Text, StyleSheet, View, Pressable, ImageBackground, Modal, Animated, Dimensions } from "react-native";
import { Image } from "expo-image";
import { useNavigation, useRoute } from "@react-navigation/native";
import Drawer1 from "../components/Drawer1";

const { width, height } = Dimensions.get("window");

const HomeScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { userName } = route.params || {};

  const [settingsIconVisible, setSettingsIconVisible] = useState(false);

  const openSettingsIcon = useCallback(() => {
    setSettingsIconVisible(true);
  }, []);

  const closeSettingsIcon = useCallback(() => {
    setSettingsIconVisible(false);
  }, []);

  // Create animated values for scaling and opacity
  const scaleValue = useRef(new Animated.Value(1)).current;
  const opacityValue = useRef(new Animated.Value(0)).current;
  const translateYValue = useRef(new Animated.Value(50)).current;

  useEffect(() => {
    // Scale animation for "PLAY AND HAVE FUN" text
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleValue, {
          toValue: 1.2,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(scaleValue, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Animation for "COLORS GAME" text
    Animated.timing(opacityValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    Animated.timing(translateYValue, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [scaleValue, opacityValue, translateYValue]);

  return (
    <>
      <ImageBackground
        style={styles.homescreenIcon}
        resizeMode="cover"
        source={require("../assets/homescreen.png")}
      >
        <View style={styles.topContainer}>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              contentFit="cover"
              source={require("../assets/logo.png")}
            />
          </View>
          <Text style={styles.userName}>{userName}</Text>
          <Pressable
            style={styles.settings}
            onPress={openSettingsIcon}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/settings.png")}
            />
          </Pressable>
        </View>
        <View style={styles.groupParent}>
          <View style={styles.colorsGameParent}>
            <Animated.Text
              style={[
                styles.colorsGame,
                {
                  opacity: opacityValue,
                  transform: [{ translateY: translateYValue }],
                },
              ]}
            >
              COLORS GAME
            </Animated.Text>
            <Animated.Text
              style={[styles.playAndHave, { transform: [{ scale: scaleValue }] }]}
            >
              PLAY AND HAVE FUN
            </Animated.Text>
            <View style={[styles.levelContainer, { backgroundColor: "#1e9ec6" }]}>
              <Text style={styles.levelText} onPress={() => navigation.navigate("LevelsScreen")}>EASY</Text>
              <Pressable onPress={() => navigation.navigate("LevelsScreen")}>
                <Image
                  style={styles.arrowRightIcon}
                  contentFit="cover"
                  source={require("../assets/arrow-right.png")}
                />
              </Pressable>
            </View>
            <View style={[styles.levelContainer, { backgroundColor: "#25cf4a" }]}>
              <Text style={styles.levelText} onPress={() => navigation.navigate("MediumLevelsScreen")}>MEDIUM</Text>
              <Pressable onPress={() => navigation.navigate("MediumLevelsScreen")}>
                <Image
                  style={styles.arrowRightIcon}
                  contentFit="cover"
                  source={require("../assets/arrow-right1.png")}
                />
              </Pressable>
            </View>
            <View style={[styles.levelContainer, { backgroundColor: "#cf2525" }]}>
              <Text style={styles.levelText} onPress={() => navigation.navigate("HardLevelsScreen")}>HARD</Text>
              <Pressable onPress={() => navigation.navigate("HardLevelsScreen")}>
                <Image
                  style={styles.arrowRightIcon}
                  contentFit="cover"
                  source={require("../assets/arrow-right2.png")}
                />
              </Pressable>
            </View>
            <Text style={styles.levels}>LEVELS</Text>
            <Pressable
              style={styles.gallery}
              onPress={() => navigation.navigate("Gallery")}
            >
              <Image
                style={styles.galleryIcon}
                contentFit="cover"
                source={require("../assets/gallery.png")}
              />
              <Text style={styles.galleryText}>Gallery</Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>

      <Modal animationType="fade" transparent visible={settingsIconVisible}>
        <View style={styles.settingsIconOverlay}>
          <Pressable
            style={styles.settingsIconBg}
            onPress={closeSettingsIcon}
          />
          <Drawer1 onClose={closeSettingsIcon} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  homescreenIcon: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  topContainer: {
    position: 'absolute',
    top: height * 0.05,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: width * 0.05,
  },
  logoContainer: {
    width: width * 0.15,
    height: height * 0.08,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  userName: {
    fontSize: width * 0.05,
    color: 'black',
  },
  settings: {
    width: width * 0.08,
    height: height * 0.05,
  },
  icon: {
    width: '100%',
    height: '100%',
  },
  groupParent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  colorsGameParent: {
    alignItems: "center",
  },
  colorsGame: {
    fontSize: width * 0.1,
    fontWeight: "bold",
    color: "black",
    marginBottom: height * 0.02,
  },
  playAndHave: {
    fontSize: width * 0.05,
    color: "rgba(255,200,10,1)",
    marginBottom: height * 0.03,
  },
  levelContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: width * 0.8,
    height: height * 0.07,
    borderRadius: 25,
    paddingHorizontal: 20,
    marginBottom: height * 0.02,
  },
  levelText: {
    fontSize: width * 0.08,
    color: "#fff",
  },
  arrowRightIcon: {
    width: width * 0.08,
    height: height * 0.05,
  },
  levels: {
    fontSize: width * 0.08,
    fontWeight: "bold",
    color: "black",
    marginBottom: height * 0.03,
  },
  gallery: {
    position: "relative",
    bottom: -height * 0.2,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(208, 209, 207,1)",
    padding: width * 0.03,
    borderRadius: 25,
  },
  galleryIcon: {
    width: width * 0.08,
    height: height * 0.05,
    marginRight: width * 0.02,
  },
  galleryText: {
    fontSize: width * 0.05,
    color: "#fff",
  },
  settingsIconOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  settingsIconBg: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default HomeScreen;
