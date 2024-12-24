import { StyleSheet, Text, View, ScrollView } from "react-native";

import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { height_percentage, width_percentage } from "@/helpers/common";
import { theme } from "@/constants/theme";
import PostCard from "@/components/PostCard";
import { useRouter } from "expo-router";
import LanguageData from "@/constants/languagedata";

const PostDetails: React.FC = () => {
  const { postId } = useLocalSearchParams();
  console.log("got post id", postId);
  const [post, setPost] = useState(null);
  const router = useRouter();
  const [startLoading, setStartLoading] = useState(true);

  useEffect(() => {
    getPostDetails();
  }, []);

  const getPostDetails = async () => {};
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
      >
        <PostCard
          item={LanguageData.find((item) => item.id == postId)}
          router={router}
          hasShadow={false}
        />
      </ScrollView>
    </View>
  );
};
export default PostDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingVertical: width_percentage(7),
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  list: {
    paddingHorizontal: width_percentage(4),
  },
  sendIcon: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.8,
    borderColor: theme.colors.primary,
    borderRadius: theme.radius.lg,
    borderCurve: "continuous",
    height: height_percentage(5.8),
    width: height_percentage(5.8),
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  notFound: {
    fontSize: height_percentage(2.5),
    color: theme.colors.text,
    fontWeight: "400",
  },
  loading: {
    height: height_percentage(5.8),
    width: height_percentage(5.8),
    justifyContent: "center",
    alignItems: "center",
    transform: [{ scale: 1.3 }],
  },
});
