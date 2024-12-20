import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { theme } from "@/constants/theme";
import { height_percentage, width_percentage } from "@/helpers/common";

const Input = (props: any) => {
  return (
    <View
      style={[styles.container, props.containerStyles && props.containerStyles]}
    >
      {props.icon && props.icon}
      <TextInput
        style={{
          flex: 1,
          textAlign: "center",
          alignContent: "center",
          justifyContent: "center",
        }}
        placeholderTextColor={theme.colors.textLight}
        ref={props.inputRef && props.inputRef}
        {...props}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: height_percentage(7.2),
    width: width_percentage(80),
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.8,
    borderStartColor: "skyblue",
    borderColor: theme.colors.skyblue,

    borderRadius: theme.radius.xl,
    borderCurve: "continuous",
    paddingHorizontal: 50,
    gap: 50,
  },
});
