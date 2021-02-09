import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <>
      <View style={styles.group}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={(text) => setTitle(text)}
          placeholder="Enter the title..."
        />
      </View>
      <View style={styles.group}>
        <Text style={styles.label}>Content</Text>
        <TextInput
          style={styles.input}
          value={content}
          onChangeText={(text) => setContent(text)}
          placeholder="Enter the content..."
        />
      </View>
      <View style={styles.group}>
        <Button title="Save" onPress={() => onSubmit(title, content)} />
      </View>
    </>
  );
};

BlogPostForm.defaultProps = {
  initialValues: {
    title: "",
    content: "",
  },
};

const styles = StyleSheet.create({
  group: {
    margin: 20,
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    borderRadius: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
  },
});

export default BlogPostForm;