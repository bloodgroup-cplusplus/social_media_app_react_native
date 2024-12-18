import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import { theme } from "@/constants/theme";
import Icon from "../assets/icons";
import { StatusBar } from "expo-status-bar";
import BackButton from "@/components/BackButton";
import { useRouter } from "expo-router";
import { height_percentage, width_percentage } from "@/helpers/common";

const Login: React.FC = () => {
  const router = useRouter();
  return (
    <ScreenWrapper bg={"white"}>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <BackButton router={router} size={26} />
        {/*welcome*/}
        <View>
          <Text style={styles.welcomeText}>Hey,</Text>
          <Text style={styles.welcomeText}>Welcome Back</Text>
        </View>
        {/*form*/}
        <View style={styles.form}>
          <Text
            style={{
              fontSize: height_percentage(1.5),
              color: theme.colors.text,
            }}
          >
            Please login to continue
          </Text>
          <TextInput />
        </View>
      </View>
    </ScreenWrapper>
  );
};
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 45,
    paddingHorizontal: width_percentage(5),
  },
  welcomeText: {
    fontSize: height_percentage(4),
    fontWeight: "300",
    color: theme.colors.text,
  },
  form: {
    gap: 25,
  },
  forgotPassword: {
    textAlign: "right",
    fontWeight: "500",
    color: theme.colors.text,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
});
