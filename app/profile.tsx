import { Alert, Button, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

import ScreenWrapper from "@/components/ScreenWrapper";
import { height_percentage, width_percentage } from "@/helpers/common";
import { theme } from "@/constants/theme";
import Icon from "@/assets/icons";
import Input from "@/components/Input";
import { useState } from "react";

const Home = () => {
  const [search, setSearch] = useState("");
  return (
    <ScreenWrapper bg={"white"}>
      {/*header*/}
      <View style={styles.header}>
        <Input
          icon={<Icon name="search" size={30} strokeWidth={2} />}
          placeholder="Search for a word in english or bhutia "
          onChangeText={(value: string) => setSearch(value)}
        />
        <View style={styles.icons}></View>
      </View>
      <Text>Home</Text>
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
    height: height_percentage(4.3),
    width: height_percentage(4.3),
    borderRadius: theme.radius.sm,
    borderCurve: "continuous",
    borderColor: theme.colors.gray,
    borderWidth: 3,
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
