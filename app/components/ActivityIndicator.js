import React from "react";
import LottieView from "lottie-react-native";
import { Text } from "react-native";

function ActivityIndicator({ visible = false }) {
  if (!visible) return null;

  return (
    <LottieView
      autoPlay
      loop
      source={require("../assets/animations/loader.json")}
      style={{
        width: 200,
        height: 200,
        alignSelf: "center",
        // backgroundColor: "blue",
      }}
    />
  );
}

export default ActivityIndicator;
