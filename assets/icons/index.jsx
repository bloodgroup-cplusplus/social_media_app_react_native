import { View, Text } from "react-native";
import React from "react";
import Search from "./Search";
import { theme } from "../../constants/theme";
import ArrowLeft from "./ArrowLeft";
import Home from "./Home";

const icons = {
  home: Home,
  search: Search,
  arrowLeft: ArrowLeft,
};

const Icon = ({ name, ...props }) => {
  const IconComponent = icons[name];
  return (
    <IconComponent
      height={props.size || 24}
      width={props.size || 24}
      strokeWidth={props.strokeWidth || 1.9}
      color={theme.colors.textLight}
      {...props}
    />
  );
};

export default Icon;
