import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";
import { theme } from "@/constants/theme";

interface LoadingProps {
  size: any;
  color: string;
}
const Loading: React.FC<LoadingProps> = ({ size, color }) => {
  return (
    <View style={{ justifyContent: "center", alignContent: "center" }}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};
export default Loading;

const styles = StyleSheet.create({});
