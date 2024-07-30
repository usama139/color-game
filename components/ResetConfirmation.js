import React from "react";
import { View, Text, StyleSheet, Pressable, Modal } from "react-native";

const ResetConfirmation = ({ visible, onClose, onConfirm }) => {
  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.confirmationText}>DO YOU WANT TO RESET?</Text>
          <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={onConfirm}>
              <Text style={styles.buttonText}>YES</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={onClose}>
              <Text style={styles.buttonText}>NO</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
  },
  confirmationText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    padding: 10,
    backgroundColor: "#1e90ff",
    borderRadius: 5,
    width: "45%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default ResetConfirmation;
