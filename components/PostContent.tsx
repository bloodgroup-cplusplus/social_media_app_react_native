import { View, Text, StyleSheet, Image, Pressable, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { height_percentage } from "@/helpers/common";
import { theme } from "@/constants/theme";
import * as Clipboard from "expo-clipboard";
import { Audio } from "expo-av";
const volume_icon = require("@/assets/icons/volume.png");
const copy_icon = require("@/assets/icons/copy.png");
interface DataProps {
  key: string;
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
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const playAudio = async (source: string) => {
    const { sound } = await Audio.Sound.createAsync({
      uri: source,
    });
    setSound(sound);
    await sound.playAsync();
  };
  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const shadowStyles = {
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 1,
  };
  async function copyToClipboard(text: string) {
    await Clipboard.setStringAsync(text);
    Alert.alert("Bhutia Word Copied To Clipboard");
  }
  return (
    <>
      {data_array?.map((item) => (
        <View
          key={item.key}
          style={[styles.container, hasShadow && shadowStyles]}
        >
          <View style={styles.row}>
            <Text style={styles.username}>{item?.english}</Text>
            <Pressable onPress={() => copyToClipboard(item.bhutia)}>
              <Image
                source={copy_icon}
                style={[
                  {
                    alignContent: "flex-start",
                    alignSelf: "flex-start",
                  },
                  styles.avatarImage,
                ]}
              />
            </Pressable>
          </View>
          <Text style={styles.username}>{item?.bhutia}</Text>
          <View style={styles.row}>
            <Text style={styles.postTime}>{item?.pronunciation}</Text>
            <Pressable
              onPress={() => {
                playAudio(item?.audiolink);
              }}
            >
              <Image
                source={volume_icon}
                style={[
                  {
                    alignContent: "flex-start",
                    alignSelf: "flex-start",
                    opacity: 1,
                  },
                  styles.avatarImage,
                ]}
              />
            </Pressable>
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
    alignContent: "flex-start",
    textAlign: "left",
  },
  postTime: {
    fontSize: height_percentage(2.2),
    color: theme.colors.textLight,
    fontStyle: "italic",
    fontWeight: "600",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
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
  volume: {
    alignContent: "center",
    flexDirection: "row",
  },
  avatarImage: {
    height: height_percentage(3.3),
    width: height_percentage(3.3),
    //borderRadius: theme.radius.sm,
    borderCurve: "continuous",
    borderColor: theme.colors.gray,
    //borderWidth: 3,
  },
});
