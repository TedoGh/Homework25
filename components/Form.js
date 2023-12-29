import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import Button from "./Button";

const Form = () => {
  const [login, setLogin] = useState("Email or phone number");
  const [password, setPassword] = useState("Password");

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={login} onChangeText={setLogin} />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />
      <Button style={styles.loginBtn} text="Log in" />
      <Text style={styles.text}>Forgot password ?</Text>
      <View></View>
      <Button style={styles.createBtn} text="Create new account" />
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    maxWidth: 400,
    height: 400,
    borderRadius: 16,
    padding: 15,
    textAlign: "center",
  },
  input: {
    width: 350,
    height: 50,
    borderColor: "#8a8a8a",
    borderRadius: 8,
    borderWidth: 1,
    paddingLeft: 18,
    marginTop: 15,
    marginBottom: 15,
  },
  loginBtn: {
    backgroundColor: "#1877f2",
    width: 350,
    height: 50,
    borderRadius: 12,
    marginBottom: 10,
  },
  createBtn: {
    backgroundColor: "#42b72a",
    width: 230,
    height: 50,
    borderRadius: 12,
    marginTop: 10,
  },
  text: {
    textAlign: "center",
    color: "#1877f2",
    marginTop: 7,
  },
});
