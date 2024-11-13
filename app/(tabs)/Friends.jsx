import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Image, TextInput } from 'react-native';

const Friends = () => {
  const initialUsers = [
    { id: 1, name: 'Alice Guo', isFriend: false, profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxw0eitGgbS6Y3kJODK5lGbWxUV8sONkQUZg&s' },
    { id: 7, name: 'Liselio', isFriend: false, profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxw0eitGgbS6Y3kJODK5lGbWxUV8sONkQUZg&s' },
    { id: 2, name: 'Jill Cris', isFriend: false, profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxw0eitGgbS6Y3kJODK5lGbWxUV8sONkQUZg&s' },
    { id: 3, name: 'JiJi', isFriend: false, profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxw0eitGgbS6Y3kJODK5lGbWxUV8sONkQUZg&s' },
    { id: 4, name: 'John', isFriend: false, profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxw0eitGgbS6Y3kJODK5lGbWxUV8sONkQUZg&s' },
    { id: 5, name: 'Annie', isFriend: false, profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxw0eitGgbS6Y3kJODK5lGbWxUV8sONkQUZg&s' },
    { id: 6, name: 'Kattie', isFriend: false, profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxw0eitGgbS6Y3kJODK5lGbWxUV8sONkQUZg&s' },
  ];

  const [users, setUsers] = useState(initialUsers);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFriendship = (id) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, isFriend: !user.isFriend } : user
      )
    );
  };

  const renderUser = ({ item }) => (
    <View style={styles.userContainer}>
      <Image source={{ uri: item.profilePic }} style={styles.profilePic} />
      <Text style={styles.userName}>{item.name}</Text>
      <TouchableOpacity
        style={item.isFriend ? styles.unfollowButton : styles.followButton}
        onPress={() => toggleFriendship(item.id)}
      >
        <Text style={styles.buttonText}>
          {item.isFriend ? 'Unfollow' : 'Follow'}
        </Text>
      </TouchableOpacity>
    </View>
  );

  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search friends..."
        value={searchQuery}
        onChangeText={handleSearch}
      />

      <FlatList
        data={filteredUsers}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderUser}
        contentContainerStyle={styles.friendList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    padding: 20,
  },
  friendList: {
    paddingBottom: 10,
  },
  userContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 15,
  },
  userName: {
    fontSize: 16,
    color: '#2C3E50',
    flex: 1,
  },
  followButton: {
    backgroundColor: '#2980B9',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  unfollowButton: {
    backgroundColor: '#E74C3C',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#BDC3C7',
    borderRadius: 25,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
  },
});

export default Friends;
