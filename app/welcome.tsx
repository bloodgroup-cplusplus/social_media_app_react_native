import { StyleSheet, View, Text, Image } from "react-native";
import React from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import { StatusBar } from "expo-status-bar";
import { width_percentage } from "@/helpers/common";

const Welcome = () => {
  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark" />
      <View style={styles.container}></View>
      {/*welcome image */}
      <Image
        style={styles.welcomeImage}
        source={require("../assets/images/welcome.png")}
      />
    </ScreenWrapper>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "red",
    marginHorizontal: width_percentage(10),
  },
});
