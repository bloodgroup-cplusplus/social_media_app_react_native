import { View, Text } from "react-native";

import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface ScreenWrapperProps {
  children: any;
  bg: any;
}

const ScreenWrapper = ({ children, bg }: ScreenWrapperProps) => {
  const { top } = useSafeAreaInsets();
  const paddingTop = top > 0 ? top + 5 : 30;
  return (
    <View>
      <Text>ScreenWrapper</Text>
    </View>
  );
};

export default ScreenWrapper;
