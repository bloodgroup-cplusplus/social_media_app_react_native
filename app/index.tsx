import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import React from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import { StatusBar } from "expo-status-bar";
import { width_percentage } from "@/helpers/common";
import { height_percentage } from "@/helpers/common";
import { theme } from "@/constants/theme";
import Button from "@/components/Button";
import { useRouter } from "expo-router";
import Video, { VideoRef } from "react-native-video";
import { useRef } from "react";

const Welcome = () => {
  const videoRef = useRef<VideoRef>(null);
  const background = require("../assets/images/bkyt_logo.png");
  const router = useRouter();
  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark" />
      <View style={styles.container}>
        {/*welcome image */}
        <Image
          style={styles.welcomeImage}
          source={background}
          //ref={videoRef}
          resizeMode="contain"
        />
        {/*title*/}
        <View style={{ gap: 20 }}>
          <Text style={styles.title}>Bhutia Language Learning App</Text>
          <Text style={styles.title}>
            བྱོན་པོ་ ལེགས་སོ་ བྷོ་ཊི་ཡསྐད་རབས་ ཡར་རྒྱས་ ཆོ༹གས་པོ།
          </Text>
          <Text style={styles.punchline}>
            A fully integrated bhutia-english dictionary and bhutia e-learning
            app
          </Text>
        </View>
        {/*footer*/}
        <View style={styles.footer}>
          <Button
            title="Get Started"
            onPress={() => router.push("./profile")}
            buttonStyle={{ marginHorizontal: width_percentage(3) }}
            textStyle={{}}
            loading={false}
            hasShadow={true}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "white",
    marginHorizontal: width_percentage(4),
  },
  welcomeImage: {
    height: height_percentage(30),
    width: width_percentage(100),
    alignSelf: "center",
  },
  title: {
    color: theme.colors.text,
    fontSize: height_percentage(4),
    textAlign: "center",
    fontWeight: "700",
  },

  punchline: {
    textAlign: "center",
    paddingHorizontal: width_percentage(10),
    fontSize: height_percentage(1.7),
    color: theme.colors.text,
  },

  footer: {
    gap: 30,
    width: "100%",
  },
  bottomTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },

  loginText: {
    textAlign: "center",
    color: theme.colors.text,
    fontSize: height_percentage(1.6),
  },
});
