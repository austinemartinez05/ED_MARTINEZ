import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { logEvent } from '../../constants/analytics'; // Assuming you're using this for logging events

const Profile = () => {
  const navigation = useNavigation(); // Access the navigation object

  useEffect(() => {
    logEvent('view_profile'); // Log event for viewing the profile
  }, []);

  const handleLogout = () => {
    // Logic for logging out (e.g., clearing user data)
    logEvent('logout', { 
      userName: 'Martinez, Austine Kiño Cañete', 
      userEmail: 'austinemartinez05@gmail.com' 
    }); // Log event for logging out
    navigation.navigate('index'); // Redirect to the index page
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      
      <View style={styles.profileContainer}>
        <Image 
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS785biEGWYfQ3kCbvts_QRuNPn7IJpvovN4A&s' }} // Replace with a valid image URL
          style={styles.profileImage} 
        />
        <Text style={styles.name}>Martinez, Austine Kiño Cañete</Text>
        <Text style={styles.email}>austinemartinez05@gmail.com</Text>
        <Text style={styles.bio}>Haduken!</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F7F9FC',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2980B9',
    textAlign: 'center',
    marginBottom: 20,
  },
  profileContainer: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    elevation: 3,
    marginBottom: 20,
    alignItems: 'center', // Center contents
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50, // Make it circular
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 5,
  },
  email: {
    fontSize: 18,
    color: '#2980B9',
    marginBottom: 5,
  },
  bio: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#2980B9',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Profile;