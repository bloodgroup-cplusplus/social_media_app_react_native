import { StyleSheet, Text, View } from "react-native";

import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";

const PostDetails: React.FC = () => {
  const { postId } = useLocalSearchParams();
  console.log("got post id", postId);
  const [post, setPost] = useState(null);
  return (
    <View>
      <Text>Post Details</Text>
    </View>
  );
};

export default PostDetails;

const styles = StyleSheet.create({});
