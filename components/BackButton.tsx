import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "@/assets/icons";
import { theme } from "@/constants/theme";
import { Router } from "expo-router";
interface BackButtonProps {
  size: number;
  router: Router;
}

const BackButton = ({ size, router }: BackButtonProps) => {
  return (
    <Pressable>
      <Icon
        name="arrowLeft"
        strokeWidth={2.5}
        size={size}
        color={theme.colors.text}
      />
    </Pressable>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  button: {
    alignSelf: "flex-start",
    padding: 5,
    borderRadius: theme.radius.sm,
    backgroundColor: "rgba(0,0,0,0,0.07)",
  },
});
