import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import { theme } from "@/constants/theme";
import Icon from "../assets/icons";

const Login: React.FC = () => {
  return (
    <ScreenWrapper bg={"white"}>
      <Text>Login</Text>
      <Icon name="home" color="red" />
    </ScreenWrapper>
  );
};
export default Login;
