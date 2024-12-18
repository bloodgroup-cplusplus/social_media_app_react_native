import { Dimensions } from "react-native";

const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");

export const height_percentage = (percentage: number) => {
  return (percentage * deviceHeight) / 100;
};

export const width_percentage = (percentage: number) => {
  return (percentage * deviceWidth) / 100;
};
