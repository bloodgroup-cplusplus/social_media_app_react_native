import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { router } from "expo-router";
import { height_percentage, width_percentage } from "@/helpers/common";
import { theme } from "@/constants/theme";
import { Image } from "expo-image";

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
      <View style={[styles.container, hasShadow && shadowStyles]}>
        <View style={styles.header}>
          <View style={styles.userInfo}>
            <View style={{ gap: 2 }}>
              <Text style={styles.username}>{item.english}</Text>
              <Text style={styles.username}>{item.bhutia}</Text>

              <Text style={styles.postTime}>{item.pronunciation}</Text>
            </View>
          </View>
        </View>
        {/* post body and media */}
        <View style={styles.content}>
          <View style={styles.postBody}>
            <Image
              source={item.imageLink}
              transition={100}
              style={styles.postMedia}
              contentFit="cover"
            />
          </View>
          <View style={styles.footer}>
            <View style={styles.foooterButton}></View>
          </View>
        </View>
      </View>
    </>
  );
};
export default PostCard;

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
    paddingBottom: 5,
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
