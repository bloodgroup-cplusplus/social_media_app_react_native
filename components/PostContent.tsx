import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { router } from "expo-router";
import { height_percentage, width_percentage } from "@/helpers/common";
import { theme } from "@/constants/theme";
import { Image } from "expo-image";
interface DataProps {
  english: string;
  bhutia: string;
  pronunciation: string;
  audiolink: string;
}
interface TopicsProps {
  id: string;
  english: string;
  bhutia: string;
  pronunciation: string;
  imageLink: any;
  data: Array<DataProps>;
}

interface PostContentProps {
  item: TopicsProps | undefined;
  hasShadow: boolean;
}

const PostContent: React.FC<PostContentProps> = ({
  item,
  hasShadow,
}: PostContentProps) => {
  const data_array: Array<DataProps> | undefined = item?.data;
  const shadowStyles = {
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 1,
  };
  const openPostDetails = () => {};
  return (
    <>
      {data_array?.map((item) => (
        <View style={[styles.container, hasShadow && shadowStyles]}>
          <View style={styles.header}>
            <View style={styles.userInfo}>
              <View style={{ gap: 2 }}>
                <Text style={styles.username}>
                  {item?.english} ( {item?.bhutia} ་)
                </Text>
                <Text style={styles.postTime}>{item?.pronunciation}</Text>
              </View>
            </View>
          </View>
        </View>
      ))}
    </>
  );
};
export default PostContent;

const styles = StyleSheet.create({
  container: {
    gap: 10,
    marginBottom: 15,
    borderRadius: theme.radius.xxl * 1.1,
    borderCurve: "continuous",
    padding: 10,
    paddingVertical: 12,
    backgroundColor: "white",
    borderWidth: 0.5,
    borderColor: theme.colors.gray,
    shadowColor: "#000",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  username: {
    fontSize: height_percentage(2.7),
    color: theme.colors.textDark,
    fontWeight: "bold",
    alignContent: "center",
    textAlign: "center",
  },
  postTime: {
    fontSize: height_percentage(2.2),
    color: theme.colors.textLight,
    fontStyle: "italic",
    fontWeight: "600",
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