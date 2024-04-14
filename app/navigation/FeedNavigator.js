import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListingsScreen from "../screens/ListingsScreen";
import ListDetailsScreen from "../screens/ListDetailsScreen";

const Stack = createNativeStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Listings" component={ListingsScreen} />
    <Stack.Screen name="ListingDetails" component={ListDetailsScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;
