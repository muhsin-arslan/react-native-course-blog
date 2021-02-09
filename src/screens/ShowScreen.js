import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import { EvilIcons } from "@expo/vector-icons";

const ShowScreen = ({ navigation }) => {
  const blogPostId = navigation.getParam("id");
  const { state } = useContext(Context);
  const blogPost = state.find((blogPost) => blogPost.id === blogPostId);

  return (
    <View>
      <Text style={styles.title}>{blogPost.title}</Text>
      <Text style={styles.content}>{blogPost.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Edit", { id: navigation.getParam("id") })
        }
      >
        <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#141313",
    textAlign: "center",
    marginTop: 10,
  },
  content: {
    fontSize: 16,
    color: "#333333",
    padding: 15,
  },
});

export default ShowScreen;
