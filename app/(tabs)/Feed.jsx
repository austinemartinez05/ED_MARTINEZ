import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TextInput, TouchableOpacity, Image } from 'react-native';

const Feed = () => {
  // Pre-existing posts with manually inputted image URLs
  const initialPosts = [
    { id: 1, username: 'beach_lover', text: 'Enjoying the sunshine at the beach!', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJn2C3M5bAK5JbzqGGZpNxQ6J1wIuExZTHiA&s' },
    { id: 2, username: 'au_kin', text: 'Coffee date with bal', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShY0aeJZAPs3PugOzP0UDCa4LwZsYvyYKSyw&s' },
    { id: 3, username: 'food_luv', text: 'Yummy!', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWZ-5PHNRg_lbOJJbsHuNK4GnUdNN35zdYoQ&s' },
    { id: 4, username: 'dream_car', text: 'Porsche', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbUdHvl4DnmkLHFD7H1muxK0utcn1Bl6gZ9w&s' },
  ];

  const [posts, setPosts] = useState(initialPosts);
  const [newPost, setNewPost] = useState(''); 

  // Function to add a new post (text only)
  const addPost = () => {
    if (newPost.trim()) {
      const newPostData = {
        id: posts.length + 1,
        username: 'new_user', // Default username for new posts
        text: newPost, // No image for new posts, only text
      };
      setPosts([...posts, newPostData]);
      setNewPost(''); // Reset input field
    }
  };

  // Function to render each post with an Instagram-like layout
  const renderPost = ({ item }) => {
    return (
      <View style={styles.postContainer}>
        <View style={styles.postHeader}>
          <Text style={styles.usernameText}>{item.username}</Text>
        </View>
        {/* Render the image only if it exists */}
        {item.image && <Image source={{ uri: item.image }} style={styles.postImage} />}
        <Text style={styles.postText}>{item.text}</Text>
        <View style={styles.postActions}>
          <Text style={styles.actionButton}>❤️</Text>
          <Text style={styles.actionButton}>💬</Text>
          <Text style={styles.actionButton}>📤</Text>
        </View>
      </View>
    );
  };

  // Track typing in the text input
  const handlePostInputChange = (text) => {
    setNewPost(text); // Track changes to the input
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderPost}
        contentContainerStyle={styles.feed}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="What's on your mind?"
          value={newPost}
          onChangeText={handlePostInputChange} // Track changes to the input
        />
        <TouchableOpacity style={styles.sendButton} onPress={addPost}>
          <Text style={styles.sendButtonText}>Post</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    padding: 10,
  },
  feed: {
    paddingBottom: 10,
  },
  postContainer: {
    marginVertical: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    overflow: 'hidden',
  },
  postHeader: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  usernameText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2C3E50',
  },
  postImage: {
    width: '100%',
    height: 400, // Height for the images
    backgroundColor: '#E0E0E0',
  },
  postText: {
    padding: 10,
    fontSize: 14,
    color: '#2C3E50',
  },
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  actionButton: {
    fontSize: 18,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#BDC3C7',
    borderRadius: 25,
    padding: 10,
    marginRight: 10,
    backgroundColor: '#FFFFFF',
  },
  sendButton: {
    backgroundColor: '#2980B9',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  sendButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default Feed;
