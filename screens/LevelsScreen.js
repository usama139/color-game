import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Pressable,
  Text,
  View,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BlurView } from 'expo-blur';
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const LevelsScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.levelsscreenIcon}
      resizeMode="cover"
      source={require("../assets/levelsscreen1.jpg")}
    >
     
        <View style={[styles.groupParent, styles.groupPosition1]}>
          <View style={[styles.groupContainer, styles.groupPosition1]}>
            <View style={[styles.rectangleParent, styles.groupPosition]}>
              <Pressable
                style={styles.groupPosition}
                onPress={() => navigation.navigate("DrawingPage")}
              >
                <Image
                  style={[styles.icon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/rectangle-4.jpg")}
                />
              </Pressable>
              <Text style={[styles.text, styles.textPosition]} onPress={() => navigation.navigate("DrawingPage")}>1</Text>
            </View>
            <Image
              style={[styles.groupChild, styles.groupPosition]}
              contentFit="cover"
              source={require("../assets/rectangle-7.png")}
            />
            <Image
              style={[styles.groupItem, styles.groupPosition]}
              contentFit="cover"
              source={require("../assets/rectangle-4.jpg")}
            />
            <Image
              style={[styles.groupInner, styles.groupPosition]}
              contentFit="cover"
              source={require("../assets/rectangle-4.jpg")}
            />
            <Image
              style={[styles.rectangleIcon, styles.groupPosition]}
              contentFit="cover"
              source={require("../assets/rectangle-16.png")}
            />
            <Image
              style={[styles.groupChild1, styles.groupChildPosition1]}
              contentFit="cover"
              source={require("../assets/rectangle-5.png")}
            />
            <Image
              style={[styles.groupChild2, styles.groupChildPosition1]}
              contentFit="cover"
              source={require("../assets/rectangle-5.png")}
            />
            <Image
              style={[styles.groupChild3, styles.groupChildPosition1]}
              contentFit="cover"
              source={require("../assets/rectangle-5.png")}
            />
            <Image
              style={[styles.groupChild4, styles.groupChildPosition1]}
              contentFit="cover"
              source={require("../assets/rectangle-5.png")}
            />
            <Image
              style={[styles.groupChild5, styles.groupChildPosition1]}
              contentFit="cover"
              source={require("../assets/rectangle-5.png")}
            />
            <Image
              style={[styles.groupChild6, styles.groupChildPosition]}
              contentFit="cover"
              source={require("../assets/rectangle-6.png")}
            />
            <Image
              style={[styles.groupChild7, styles.groupChildPosition]}
              contentFit="cover"
              source={require("../assets/rectangle-6.png")}
            />
            <Image
              style={[styles.groupChild8, styles.groupChildPosition]}
              contentFit="cover"
              source={require("../assets/rectangle-6.png")}
            />
            <Image
              style={[styles.groupChild9, styles.groupChildPosition]}
              contentFit="cover"
              source={require("../assets/rectangle-6.png")}
            />
            <Image
              style={[styles.groupChild10, styles.groupChildPosition]}
              contentFit="cover"
              source={require("../assets/rectangle-6.png")}
            />
            <Image
              style={[styles.lockIcon, styles.lockIconPosition2]}
              contentFit="cover"
              source={require("../assets/lock.png")}
            />
            <Image
              style={[styles.lockIcon1, styles.lockIconPosition2]}
              contentFit="cover"
              source={require("../assets/lock.png")}
            />
            <Image
              style={[styles.lockIcon2, styles.lockIconPosition1]}
              contentFit="cover"
              source={require("../assets/lock1.png")}
            />
            <Image
              style={[styles.lockIcon3, styles.lockIconPosition1]}
              contentFit="cover"
              source={require("../assets/lock1.png")}
            />
            <Image
              style={[styles.lockIcon4, styles.lockIconPosition1]}
              contentFit="cover"
              source={require("../assets/lock1.png")}
            />
            <Image
              style={[styles.lockIcon5, styles.lockIconPosition1]}
              contentFit="cover"
              source={require("../assets/lock2.png")}
            />
            <Image
              style={[styles.lockIcon6, styles.lockIconPosition2]}
              contentFit="cover"
              source={require("../assets/lock.png")}
            />
            <Image
              style={[styles.lockIcon7, styles.lockIconPosition2]}
              contentFit="cover"
              source={require("../assets/lock.png")}
            />
            <Image
              style={[styles.lockIcon8, styles.lockIconPosition2]}
              contentFit="cover"
              source={require("../assets/lock3.png")}
            />
            <Image
              style={[styles.lockIcon9, styles.lockIconPosition]}
              contentFit="cover"
              source={require("../assets/lock4.png")}
            />
            <Image
              style={[styles.lockIcon10, styles.lockIconPosition]}
              contentFit="cover"
              source={require("../assets/lock4.png")}
            />
            <Image
              style={[styles.lockIcon11, styles.lockIconPosition]}
              contentFit="cover"
              source={require("../assets/lock4.png")}
            />
            <Image
              style={[styles.lockIcon12, styles.lockIconPosition]}
              contentFit="cover"
              source={require("../assets/lock4.png")}
            />
            <Image
              style={[styles.lockIcon13, styles.lockIconPosition]}
              contentFit="cover"
              source={require("../assets/lock5.png")}
            />
          </View>
          <View style={[styles.levelsWrapper, styles.groupPosition1]}>
            <Text style={[styles.levels, styles.textPosition]}>LEVELS</Text>
          </View>
          <Pressable style={styles.vector} onPress={() => navigation.goBack()}>
            <Image
              style={[styles.icon1, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/vector.png")}
            />
          </Pressable>
        </View>
     
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  groupPosition1: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupPosition: {
    height: 63,
    width: 78,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  textPosition: {
    textAlign: "left",
    color: Color.colorWhite,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupChildPosition1: {
    marginLeft: -34.6,
    borderRadius: Border.br_8xs,
    height: 63,
    width: 78,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupChildPosition: {
    marginLeft: 79.9,
    borderRadius: Border.br_8xs,
    height: 63,
    width: 78,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  lockIconPosition2: {
    height: 40,
    width: 37,
    marginLeft: -13.4,
    left: "50%",
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  lockIconPosition1: {
    marginLeft: -137.2,
    height: 40,
    width: 37,
    left: "50%",
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  lockIconPosition: {
    marginLeft: 100.2,
    height: 40,
    width: 37,
    left: "50%",
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  icon: {
    marginLeft: -38.8,
    borderRadius: Border.br_8xs,
    marginTop: -31.5,
  },
  text: {
    marginTop: -17.5,
    marginLeft: -7.4,
    fontSize: 30,
    fontStyle: "italic",
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    width: 14,
  },
  rectangleParent: {
    marginLeft: -157.5,
    width: 78,
    marginTop: -217.5,
  },
  groupChild: {
    marginTop: -125.5,
    borderRadius: Border.br_8xs,
    marginLeft: -157.5,
    width: 78,
  },
  groupItem: {
    borderRadius: Border.br_8xs,
    marginTop: -31.5,
    marginLeft: -157.5,
    width: 78,
  },
  groupInner: {
    marginTop: 61.5,
    borderRadius: Border.br_8xs,
    marginLeft: -157.5,
    width: 78,
  },
  rectangleIcon: {
    marginLeft: -156.6,
    marginTop: 152.5,
    borderRadius: Border.br_8xs,
  },
  groupChild1: {
    marginTop: -217.5,
  },
  groupChild2: {
    marginTop: -124.5,
  },
  groupChild3: {
    marginTop: -31.5,
  },
  groupChild4: {
    marginTop: 61.5,
  },
  groupChild5: {
    marginTop: 153.5,
  },
  groupChild6: {
    marginTop: -217.5,
  },
  groupChild7: {
    marginTop: -125.5,
  },
  groupChild8: {
    marginTop: -31.5,
  },
  groupChild9: {
    marginTop: 61.5,
  },
  groupChild10: {
    marginTop: 152.5,
  },
  lockIcon: {
    marginTop: -205.5,
  },
  lockIcon1: {
    marginTop: -113.5,
  },
  lockIcon2: {
    marginTop: -113.5,
  },
  lockIcon3: {
    marginTop: -18.5,
  },
  lockIcon4: {
    marginTop: 76.5,
  },
  lockIcon5: {
    marginTop: 165.5,
  },
  lockIcon6: {
    marginTop: -21.5,
  },
  lockIcon7: {
    marginTop: 70.5,
  },
  lockIcon8: {
    marginTop: 162.5,
  },
  lockIcon9: {
    marginTop: -205.5,
  },
  lockIcon10: {
    marginTop: -113.5,
  },
  lockIcon11: {
    marginTop: -21.5,
  },
  lockIcon12: {
    marginTop: 70.5,
  },
  lockIcon13: {
    marginTop: 165.5,
  },
  groupContainer: {
    marginTop: -132.5,
    marginLeft: -155,
    width: 315,
    height: 435,
  },
  levels: {
    marginTop: -24,
    marginLeft: -115.5,
    fontSize: FontSize.size_21xl,
    letterSpacing: 16,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 6,
    },
    textShadowRadius: 4,
  },
  levelsWrapper: {
    marginTop: -257.5,
    marginLeft: -109,
    width: 231,
    height: 48,
  },
  icon1: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  vector: {
    left: "0%",
    top: "0%",
    right: "95.31%",
    bottom: "97.52%",
    width: "4.69%",
    height: "2.48%",
    position: "absolute",
  },
  groupParent: {
    marginTop: -359,
    marginLeft: -163,
    width: 320,
    height: 605,
  },
  levelsscreenIcon: {
    flex: 1,
    height: "100vh",
    overflow: "hidden",
    width: "100vw",
  },
  blurContainer: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default LevelsScreen;
