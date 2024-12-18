import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import Home from "../assets/icons/Home";
import { theme } from "@/constants/theme";

const Login: React.FC = () => {
  return (
    <ScreenWrapper bg={"white"}>
      <Text>Login</Text>
      <Home strokeWidth={2} color={theme.colors.rose} />
    </ScreenWrapper>
  );
};
export default Login;
