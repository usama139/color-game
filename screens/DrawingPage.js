import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  ImageBackground,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const DrawingPage = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={[styles.drawingpageIcon, styles.iconLayout]}
      resizeMode="cover"
      source={require("../assets/drawingpage.png")}
    >
      <View style={[styles.levels, styles.levelsPosition]}>
        <View style={[styles.level1Parent, styles.levelsPosition]}>
          <Text style={[styles.level1, styles.hintTypo]}>LEVEL-1</Text>
          <Pressable
            style={[styles.groupChild, styles.groupChildPosition]}
            onPress={() => navigation.navigate("HintPage")}
          />
          <Text style={[styles.hint, styles.hintTypo]} onPress={() => navigation.navigate("HintPage")}>Hint</Text>
          <Image
            style={[styles.vectorIcon, styles.groupChildPosition]}
            contentFit="cover"
            source={require("../assets/vector2.png")}
          />
          <Image
            style={styles.apple1Icon}
            contentFit="cover"
            source={require("../assets/apple-1.png")}
          />
          <View style={styles.vectorParent}>
            <Image
              style={styles.vectorIconLayout}
              contentFit="cover"
              source={require("../assets/vector3.png")}
            />
            <Image
              style={[styles.vectorIcon2, styles.vectorIconLayout]}
              contentFit="cover"
              source={require("../assets/vector4.png")}
            />
            <Image
              style={[styles.vectorIcon2, styles.vectorIconLayout]}
              contentFit="cover"
              source={require("../assets/vector5.png")}
            />
            <Image
              style={[styles.vectorIcon2, styles.vectorIconLayout]}
              contentFit="cover"
              source={require("../assets/vector6.png")}
            />
            <Image
              style={[styles.vectorIcon2, styles.vectorIconLayout]}
              contentFit="cover"
              source={require("../assets/vector7.png")}
            />
            <Image
              style={[styles.vectorIcon2, styles.vectorIconLayout]}
              contentFit="cover"
              source={require("../assets/vector8.png")}
            />
          </View>
        </View>
        <Pressable style={styles.vector} onPress={() => navigation.goBack()}>
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector9.png")}
          />
        </Pressable>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  levelsPosition: {
    width: 320,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  hintTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupChildPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  vectorIconLayout: {
    height: 30,
    width: 30,
  },
  level1: {
    marginTop: -329,
    marginLeft: -98,
    fontSize: FontSize.size_21xl,
    letterSpacing: 5.6,
    color: Color.colorBlack,
  },
  groupChild: {
    marginTop: 273,
    marginLeft: -79,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGray,
    width: 148,
    height: 50,
  },
  hint: {
    marginTop: 280,
    marginLeft: -42,
    fontSize: FontSize.size_6xl,
    letterSpacing: 1.3,
    color: Color.colorWhite,
  },
  vectorIcon: {
    marginTop: 288,
    marginLeft: 23,
    width: 18,
    height: 18,
  },
  apple1Icon: {
    top: 146,
    left: 28,
    borderRadius: 53,
    width: 263,
    height: 266,
    position: "absolute",
  },
  vectorIcon2: {
    marginLeft: 28,
  },
  vectorParent: {
    top: 492,
    left: 0,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  level1Parent: {
    marginTop: -324.95,
    marginLeft: -160,
    height: 658,
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  vector: {
    left: "0.81%",
    top: "0%",
    right: "94.5%",
    bottom: "97.75%",
    width: "4.69%",
    height: "2.25%",
    position: "absolute",
  },
  levels: {
    marginTop: -355.1,
    marginLeft: -159,
    height: 666,
  },
  drawingpageIcon: {
    flex: 1,
    height: 800,
  },
});

export default DrawingPage;
