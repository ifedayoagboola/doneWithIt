import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import {
  ListItem,
  ListItemSeparator,
  ListItemDeleteAction,
} from "../components/lists";

const initialMessages = [
  {
    id: 1,
    title: "Mosh Hamedani",
    description:
      "Lorem 3fdjkn dfn kdfnlkv fndk ldfnsjkvl nsfdjk fndjkn kjalnfjv ldfnjk ",

    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "Mosh Hamedani",
    description:
      "ewjdn iefiewoj ier89oi45 re89hwea89 oiajip evdfnaio ehap a;ahe uidcha;a eduih ",

    image: require("../assets/mosh.jpg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description:
                "lorem Ipsum wants to exchange $3000 to naira ant 206.4 rate",
              image: require("../assets/mosh.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
