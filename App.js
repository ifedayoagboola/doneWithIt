import React from "react";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Text from "./app/components/Text";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Screen from "./app/components/Screen";
import AuthNavigator from "./app/navigation/AuthNavigator";
export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const Tweets = () => {
    <Screen>
      <Text>Tweets</Text>
    </Screen>;
  };
  const TweetDetails = () => {
    <Screen>
      <Text>TweetDetails</Text>
    </Screen>;
  };
  const StackNavigator = () => {
    return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="ListingsScreen" component={ListingsScreen} />
      </Stack.Navigator>
    );
  };
  const TabNavigator = () => {
    return (
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Feed" component={Tweets} />
        <Tab.Screen name="Account" component={TweetDetails} />
      </Tab.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}
