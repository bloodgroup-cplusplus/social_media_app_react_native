import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { router } from "expo-router";
interface PostCardProps {
  item: any;
  router: typeof router;
}

const PostCard: React.FC<PostCardProps> = ({ item, router }: PostCardProps) => {
  return <></>;
};
export default PostCard;
