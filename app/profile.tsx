import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useEffect } from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import { height_percentage, width_percentage } from "@/helpers/common";
import { theme } from "@/constants/theme";
import Icon from "@/assets/icons";
import Input from "@/components/Input";
import { useState } from "react";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import PostCard from "@/components/PostCard";
import Loading from "@/components/Loading";
import LanguageData from "@/constants/languagedata";

const Home = () => {
  const [search, setSearch] = useState("");
  const logo = require("@/assets/images/bkyt_logo.png");
  const router = useRouter();
  useEffect(() => {
    getPosts();
  }, []);
  const getPosts = async () => {};
  return (
    <ScreenWrapper bg={"white"}>
      {/*header*/}
      <View style={styles.header}>
        <Image source={logo} style={styles.avatarImage} transition={100} />
        <Input
          icon={<Icon name="search" size={18} strokeWidth={2} />}
          placeholder="Search for a word in english or bhutia "
          onChangeText={(value: string) => setSearch(value)}
        />
      </View>
      <View>
        <FlatList
          data={LanguageData}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listStyle}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => {
                router.push({
                  pathname: "/postDetails",
                  params: { postId: item.id.toString() },
                });
              }}
            >
              <PostCard item={item} router={router} hasShadow={true} />
            </Pressable>
          )}
          ListFooterComponent={
            <View style={{ marginVertical: 30 }}>
              <Loading size={25} color="skyblue" />
            </View>
          }
        />
      </View>
    </ScreenWrapper>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    marginHorizontal: width_percentage(4),
  },

  title: {
    color: theme.colors.text,
    fontSize: height_percentage(3.2),
    fontWeight: "500",
  },

  avatarImage: {
    height: height_percentage(6.3),
    width: height_percentage(6.3),
    //borderRadius: theme.radius.sm,
    borderCurve: "continuous",
    borderColor: theme.colors.gray,
    //borderWidth: 3,
  },
  icons: {
    flexDirection: "row",
    justifyContent: "center",
  },
  listStyle: {
    paddingTop: 20,
    paddingHorizontal: width_percentage(4),
  },
  noPosts: {
    fontSize: height_percentage(2),
    textAlign: "center",
    color: theme.colors.text,
  },
  pill: {
    position: "absolute",
    right: -10,
    top: -4,
    height: height_percentage(2.2),
    width: height_percentage(2.2),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: theme.colors.skyblue,
  },
  pillText: {
    color: "white",
    fontSize: height_percentage(1.2),
    fontWeight: "600",
  },
});
