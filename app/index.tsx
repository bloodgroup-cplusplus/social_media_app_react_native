import { View, Text, Button } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import ScreenWrapper from "@/components/ScreenWrapper";

const index = () => {
  const router = useRouter();
  return (
    <ScreenWrapper bg={"white"}>
      <Text>Index</Text>
      <Button title="welcome" onPress={() => router.push("/welcome")}></Button>
    </ScreenWrapper>
  );
};
export default index;
