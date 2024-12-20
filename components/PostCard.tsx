import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { router } from "expo-router";
import { height_percentage } from "@/helpers/common";
import { theme } from "@/constants/theme";
interface PostCardProps {
  item: any;
  router: typeof router;
  hasShadow: boolean;
}

const PostCard: React.FC<PostCardProps> = ({
  item,
  router,
  hasShadow,
}: PostCardProps) => {
  const shadowStyles = {
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 1,
  };
  return (
    <>
      <View>
        <Text>Postcard</Text>
      </View>
    </>
  );
};
export default PostCard;

const styles = StyleSheet.create({
  username: {},
  postTime: {
    fontSize: height_percentage(1.4),
    color: theme.colors.textLight,
    fontWeight: "400",
  },
  content: {
    gap: 10,
  },
  postMedia: {
    height: height_percentage(40),
    width: "100%",
    borderRadius: theme.radius.xl,
    borderCurve: "continuous",
  },
  postBody: {
    marginLeft: 5,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  foooterButton: {
    marginLeft: 5,
    flexDirection: "row",
    alignItems: "center",
  },
});
