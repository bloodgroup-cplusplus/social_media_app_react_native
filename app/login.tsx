import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import { theme } from "@/constants/theme";
import Icon from "../assets/icons";
import { StatusBar } from "expo-status-bar";
import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import { useRouter } from "expo-router";
import { height_percentage, width_percentage } from "@/helpers/common";
import Input from "@/components/Input";

const Login: React.FC = () => {
  const router = useRouter();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [loading, setLoading] = useState(false);

  const onSubmit = () => {
    if (!emailRef.current || !passwordRef.current) {
      Alert.alert("Login", "pleaes fill all the fields!");
      return;
    }
    // good to go
  };
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
          <Input
            icon={<Icon name="mail" size={26} strokeWidth={1.6} />}
            placeholder="Enter your email"
            onChangeText={(value: string) => (emailRef.current = value)}
          />

          <Input
            icon={<Icon name="lock" size={26} strokeWidth={1.6} />}
            placeholder="Enter your password"
            secureTextEntry
            onChangeText={(value: string) => (passwordRef.current = value)}
          />
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
          {/*button*/}
          <Button
            title={"Login"}
            hasShadow={true}
            buttonStyle={{}}
            textStyle={{}}
            loading={loading}
            onPress={onSubmit}
          />
        </View>
        {/*footer*/}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Don't have an account</Text>
          <Pressable>
            <Text
              style={[
                styles.footerText,
                { color: theme.colors.primaryDark, fontWeight: "400" },
              ]}
            />
          </Pressable>
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
  footerText: {},
});
