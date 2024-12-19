import { Pressable, StyleSheet, Text, View } from "react-native";

import React from "react";
import { theme } from "@/constants/theme";
import { height_percentage } from "@/helpers/common";
import Loading from "./Loading";

interface ButtonProps {
  buttonStyle: any;
  textStyle: any;
  title: string;
  onPress: () => void;
  loading: boolean;
  hasShadow: boolean;
}

const Button: React.FC<ButtonProps> = ({
  buttonStyle,
  textStyle,
  title,
  onPress,
  loading,
  hasShadow,
}: ButtonProps) => {
  const shadowStyle = {
    shadowColor: theme.colors.dark,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  };
  if (loading) {
    return (
      <View style={[styles.button, buttonStyle, { backgroundColor: "white" }]}>
        <Loading size={"large"} color={theme.colors.primary} />
      </View>
    );
  }
  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, buttonStyle, hasShadow && shadowStyle]}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </Pressable>
  );
};
export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.skyblue,
    height: height_percentage(6.6),
    justifyContent: "center",
    borderCurve: "continuous",
    borderRadius: theme.radius.xl,
  },
  text: {
    fontSize: height_percentage(2.5),
    color: "white",
    textAlign: "center",
    fontWeight: "700",
  },
});
