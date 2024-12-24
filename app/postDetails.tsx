import { StyleSheet, View, ScrollView, FlatList } from "react-native";
import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import { height_percentage, width_percentage } from "@/helpers/common";
import { theme } from "@/constants/theme";
import PostCard from "@/components/PostCard";
import PostContent from "@/components/PostContent";
import LanguageData from "@/constants/languagedata";
import Loading from "@/components/Loading";

const PostDetails: React.FC = () => {
  const { postId } = useLocalSearchParams();
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
      >
        <FlatList
          data={LanguageData}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listStyle}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) =>
            item.id === postId ? (
              <>
                <PostCard item={item} router={router} hasShadow={true} />
                <PostContent item={item} hasShadow={true} />
              </>
            ) : null
          }
          ListFooterComponent={
            <View style={{ marginVertical: 30 }}>
              <Loading size={25} color="skyblue" />
            </View>
          }
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
  listStyle: {
    paddingTop: 20,
    paddingHorizontal: width_percentage(4),
  },

  postBody: {
    marginLeft: 5,
  },
  content: {
    gap: 10,
  },
});
