import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import Logo from "./components/Logo";
import { useState } from "react";
import Form from "./components/Form";

export default function App() {
  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.helloText}>
        Connect with friends and the world around you on Facebook.
      </Text>
      <Form />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f2f5",
    alignItems: "center",
    justifyContent: "center",
  },
  helloText: {
    fontSize: 24,
    textAlign: "center",
    maxWidth: 340,
    margin: "auto",
    marginBottom: 28,
  },
});
