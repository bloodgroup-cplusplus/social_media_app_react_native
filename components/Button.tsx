import { Pressable, StyleSheet, Text, View } from "react-native";

import React from "react";

interface ButtonProps {
  buttonStyle: React.CSSProperties;
  textStyle: React.CSSProperties;
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
  const shadowStyle = {};
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

const styles = StyleSheet.create({});
