import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView, Modal, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Gallery = () => {
  const navigation = useNavigation();
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  // Example image paths, replace with actual paths or logic to fetch images
  const images = [
    require("../assets/rectangle.png"),
    require("../assets/circle.webp"),
    require("../assets/greenapple.jpg"),
  ];

  const openImageModal = (image) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  const closeImageModal = () => {
    setModalVisible(false);
    setSelectedImage(null);
  };

  const handleDrawAgain = () => {
    closeImageModal();
    navigation.navigate("DrawingPage"); // Ensure "DrawingPage" is properly registered in your navigation
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gallery</Text>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {images.map((image, index) => (
          <Pressable key={index} onPress={() => openImageModal(image)}>
            <Image source={image} style={styles.image} />
          </Pressable>
        ))}
      </ScrollView>

      {/* Modal for full-screen image display */}
      {selectedImage && (
        <Modal
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeImageModal}
        >
          <View style={styles.modalContainer}>
            <Image source={selectedImage} style={styles.fullScreenImage} />
            <Pressable style={styles.drawAgainButton} onPress={handleDrawAgain}>
              <Text style={styles.buttonText}>Draw Again</Text>
            </Pressable>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  scrollView: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  image: {
    width: 100,
    height: 100,
    margin: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  fullScreenImage: {
    width: "100%",
    height: "80%",
    resizeMode: "contain",
  },
  drawAgainButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#007bff",
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Gallery;
