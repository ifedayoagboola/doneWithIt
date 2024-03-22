import { StatusBar } from "expo-status-bar";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import AppButton from "./components/AppButton";
import WelcomeScreen from "./screens/WelcomeScreen";
import Card from "./components/Card";
import ListItem from "./components/ListItem";
import ViewImageScreen from "./screens/ViewImageScreen";
import ListingDetailsScreen from "./screens/ListDetailsScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import MessagesScreen from "./screens/MessagesScreen";

export default function App() {
  return <MessagesScreen />;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f4f4",
  },
});
