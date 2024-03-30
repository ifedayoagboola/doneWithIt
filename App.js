import React from "react";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Text from "./app/components/Text";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
export default function App() {
  const Stack = createNativeStackNavigator();

  const Tweets = () => {
    <Screen>
      <Text>Tweets</Text>
    </Screen>;
  };
  const TweetDatails = () => {
    <Screen>
      <Text>Tweets</Text>
    </Screen>;
  };
  const StackNavigator = () => {
    <Stack.Navigator>
      <Stack.Screen name="Tweets" component={WelcomeScreen} />
      <Stack.Screen name="ListingsScreen" component={ListingsScreen} />
    </Stack.Navigator>;
  };
  <NavigationContainer>
    <StackNavigator />
  </NavigationContainer>;
}
