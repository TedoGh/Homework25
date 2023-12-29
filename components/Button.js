import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Button = ({ style, text }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={style}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginTop: 10,
  },
});
