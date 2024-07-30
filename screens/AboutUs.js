import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const AboutUs = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/logo.png")} // Adjust the path to your logo image
      />
      <Text style={styles.header}>About Us</Text>
      <Text style={styles.instruction}>
        Welcome to our application. Here you can find various features and
        functionalities to explore. We strive to provide the best experience
        for our users.
      </Text>
      <Text style={styles.contactInfo}>
        Email: usamamaalik6@gmail.com
      </Text>
      <Text style={styles.contactInfo}>
        Contact Information: 0349-8413112
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  instruction: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  contactInfo: {
    fontSize: 16,
    marginVertical: 5,
  },
});

export default AboutUs;
