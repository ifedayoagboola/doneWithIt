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
import MyAccountScreen from "./screens/AccountScreen";
import AccountScreen from "./screens/AccountScreen";
import ListingsScreen from "./screens/ListingsScreen";
import AppTextInput from "./components/AppTextInput";
import Screen from "./components/Screen";

export default function App() {
  return (
    <Screen>
      <AppTextInput placeholder="fchjdrtygug" />
    </Screen>
  );
}
