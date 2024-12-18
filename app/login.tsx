import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import { theme } from "@/constants/theme";
import Icon from "../assets/icons";
import { StatusBar } from "expo-status-bar";
import BackButton from "@/components/BackButton";
import { useRouter } from "expo-router";

const Login: React.FC = () => {
  const router = useRouter();
  return (
    <ScreenWrapper bg={"white"}>
      <StatusBar style="dark" />
      <View>
        <BackButton router={router} size={26} />
      </View>
    </ScreenWrapper>
  );
};
export default Login;

//const styles = StyleSheet.create{}
