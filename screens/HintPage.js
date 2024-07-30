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

const HintPage = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.hintpageIcon}
      resizeMode="cover"
      source={require("../assets/drawingpage.png")}
    >
      <View style={styles.groupParent}>
        <View style={styles.hintParent}>
          <Text style={[styles.hint, styles.hintTypo]}>Hint</Text>
          <Text
            style={[styles.followTheInstructions, styles.theTypo]}
          >{`Follow the instructions to solve this
level `}</Text>
          <Text style={[styles.applyPencilOnContainer, styles.theTypo]}>
            1- Apply pencil on dots
          </Text>
          <Text style={[styles.colorTheFish, styles.theTypo]}>
            2- Color the fish accurately
          </Text>
        </View>
        <Pressable
          style={styles.groupChild}
          onPress={() => navigation.navigate("DrawingPage")}
        />
        <Text style={[styles.back, styles.hintTypo]} onPress={() => navigation.navigate("DrawingPage")}>Back</Text>
        <Image
          style={styles.capple1Icon}
          contentFit="cover"
          source={require("../assets/capple-1.png")}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  hintTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  theTypo: {
    fontFamily: FontFamily.cambayRegular,
    fontSize: FontSize.size_xl,
    left: 0,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  hint: {
    marginLeft: -59,
    fontSize: FontSize.size_21xl,
    letterSpacing: 2.4,
    width: 94,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    top: 0,
  },
  followTheInstructions: {
    top: 58,
    width: 336,
  },
  applyPencilOnContainer: {
    top: 141,
    width: 235,
  },
  colorTheFish: {
    top: 182,
    width: 255,
  },
  hintParent: {
    marginLeft: -155.5,
    height: 215,
    width: 336,
    top: 0,
    left: "50%",
    position: "absolute",
  },
  groupChild: {
    height: "7.11%",
    marginLeft: -78.5,
    top: "92.89%",
    bottom: "0%",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGray,
    width: 158,
    left: "50%",
    position: "absolute",
  },
  back: {
    height: "6.81%",
    marginLeft: -32.5,
    top: "93.7%",
    fontSize: FontSize.size_6xl,
    letterSpacing: 1.8,
    color: Color.colorWhite,
    width: 70,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  capple1Icon: {
    top: 224,
    height: 400,
    left: 0,
    width: 361,
    position: "absolute",
  },
  groupParent: {
    marginLeft: -181,
    top: 45,
    height: 680,
    width: 361,
    left: "50%",
    position: "absolute",
  },
  hintpageIcon: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default HintPage;
