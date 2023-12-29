import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Logo = () => {
  return (
    <View>
      <Image
        style={styles.logo}
        source={{
          uri: "https://img.ge/images/25799722676236865205.png",
        }}
      />
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  logo: {
    width: 320,
    height: 106,
  },
});
