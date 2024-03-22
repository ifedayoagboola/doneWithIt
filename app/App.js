import { StatusBar } from "expo-status-bar";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import AppButton from "./components/AppButton";
import WelcomeScreen from "./screens/WelcomeScreen";
import Card from "./components/Card";
import ListItem from "./components/ListItem";
import ViewImageScreen from "./screens/ViewImageScreen";
import ListingDetailsScreen from "./components/ListDetailsScreen";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Card
        title="Red jacket for sale"
        subtitle="$100"
        image={require("../app/assets/jacket.jpg")}
      /> */}
      {/* <ListItem
        title="Red jacket for sale"
        subtitle="$100"
        image={require("../app/assets/jacket.jpg")}
      /> */}
      {/* <ViewImageScreen /> */}
      <ListingDetailsScreen />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f4f4",
  },
});
