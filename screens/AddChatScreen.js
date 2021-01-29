import React, { useLayoutEffect, useState } from "react";
import { StatusBar } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { StyleSheet, View } from "react-native";
import { Button, Icon, Input, Text } from "react-native-elements";
import { auth, db } from "../firebase";

const AddChatScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const addChat = async () => {
    await db
      .collection("chats")
      .add({
        chatName: title,
        imageChat: imageUrl || null,
      })
      .then(() => {
        navigation.goBack();
      })
      .catch((error) => alert(error.message));
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "Chat List",
    });
  }, [navigation]);

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Text h3 style={{ marginBottom: 50 }}>
        Create a chat
      </Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Enter a chat name"
          leftIcon={
            <Icon name="wechat" type="antdesign" size={24} color="black" />
          }
          type="text"
          autofocus
          value={title}
          onChangeText={(text) => setTitle(text)}
          onSubmitEditing={addChat}
        />
      </View>
      <Button
        disabled={!title}
        containerStyle={styles.button}
        raised
        onPress={addChat}
        title="Create Chat"
      />
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

export default AddChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
    backgroundColor: "white",
  },
  inputContainer: {
    width: 300,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
});
