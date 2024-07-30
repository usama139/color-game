import React, { useState } from "react";
import { View, StyleSheet, Pressable, Text, Switch, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";
import ResetConfirmation from "./ResetConfirmation"; // Import the ResetConfirmation component

const Drawer1 = ({ onClose }) => {
  const navigation = useNavigation();
  const [isMusicOn, setIsMusicOn] = useState(true);
  const [isResetModalVisible, setIsResetModalVisible] = useState(false); // State for modal visibility

  const toggleMusic = () => setIsMusicOn((prevState) => !prevState);

  const handleResetConfirm = () => {
    setIsResetModalVisible(false); // Close the modal
    Alert.alert("RESET SUCCESSFULLY"); // Show reset success message
  };

  return (
    <View style={styles.drawer}>
      <Pressable style={styles.closeButton} onPress={onClose}>
        <Text style={styles.closeButtonText}>X</Text>
      </Pressable>

      <View style={styles.setting}>
        <Pressable
          style={styles.vector}
          onPress={() => navigation.navigate("HomeScreen")}
        ></Pressable>

        <View style={styles.settingInner}>
          <View style={styles.groupWrapper}>
            <View style={styles.musicContainer}>
              <Text style={styles.musicOnoff}>Music On/Off</Text>
              <Switch
                value={isMusicOn}
                onValueChange={toggleMusic}
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isMusicOn ? "#f5dd4b" : "#f4f3f4"}
              />
            </View>
            <Pressable onPress={() => setIsResetModalVisible(true)}>
              <Text style={styles.resetLevels}>Reset levels</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("AboutUs")}>
              <Text style={styles.aboutUs}>About Us</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <ResetConfirmation
        visible={isResetModalVisible}
        onClose={() => setIsResetModalVisible(false)}
        onConfirm={handleResetConfirm}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  drawer: {
    borderRadius: 7,
    backgroundColor: "#e3e1e1",
    width: 321,
    height: 341,
    position: "relative",
    padding: 15,
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "red",
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  closeButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  vector: {
    position: "absolute",
    right: 15,
    top: 15,
    width: 24,
    height: 24,
  },
  settingInner: {
    marginTop: 50,
  },
  musicContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  musicOnoff: {
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_lg,
  },
  resetLevels: {
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_lg,
    marginVertical: 10,
  },
  aboutUs: {
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_lg,
    marginVertical: 30,
  },
  groupWrapper: {
    width: "100%",
  },
});

export default Drawer1;
