import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Alert,
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
import Data from "@/constants/data";
import { useMemo } from "react";
import * as Clipboard from "expo-clipboard";
import { Audio } from "expo-av";
const copy_icon = require("@/assets/icons/copy.png");
const volume_icon = require("@/assets/icons/volume.png");
interface DataProps {
  key: string;
  english: string;
  bhutia: string;
  pronunciation: string;
  audiolink: string;
}

const Home = () => {
  const [search, setSearch] = useState("");
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const logo = require("@/assets/images/bkyt_logo.png");
  const filteredRows = useMemo(() => {
    const rows: Array<DataProps> = [];
    const query = search.toLowerCase();
    for (const item of Data) {
      var english_search_index = item.english.toLowerCase().search(query);
      var bhutia_search_index = item.bhutia.toLowerCase().search(query);
      if (english_search_index !== -1 || bhutia_search_index !== -1) {
        rows.push(item);
      }
    }
    return rows.sort((a, b) => Number(a.key) - Number(b.key));
  }, [search]);
  const router = useRouter();
  const hasShadow = true;
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
      {/*{filteredRows.length ? (
        <>
          {filteredRows?.map((item) => (
            <View
              key={item.key}
              style={[styles.container, hasShadow && shadowStyles]}
            >
              <Text style={styles.username}>{item?.english}</Text>
              <Text style={styles.username}>{item?.bhutia}</Text>
              <Text style={styles.postTime}>{item?.pronunciation}</Text>
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
          ))}
        </>
      ) :*/}
      {
        //(
      }
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
      {
        // )}
      }
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
});
