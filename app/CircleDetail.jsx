import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import MessageComponent from './MessageComponent'; // Adjust the path as needed
import MemberManagement from './MemberManagement'; // Import your new component

const CircleDetail = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { circleId } = route.params;

  const circleDetails = {
    1: { name: 'Friends', description: 'Your close friends.' },
    2: { name: 'Family', description: 'Your family members.' },
    3: { name: 'School', description: 'Your school friends.' },
  };

  const circle = circleDetails[circleId] || { name: 'Unknown', description: 'No details available.' };

  const handleManageMembers = () => {
    navigation.navigate('MemberManagement'); // Navigate to Member Management
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{circle.name}</Text>
        <Text style={styles.description}>{circle.description}</Text>
      </View>

      {/* Add the MessageComponent for messaging functionality */}
      <MessageComponent circleId={circleId} />

      {/* Button to navigate to Member Management */}
      <TouchableOpacity
        style={styles.manageButton}
        onPress={handleManageMembers} // Call handleManageMembers instead
      >
        <Text style={styles.manageButtonText}>Manage Members</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FC',
    padding: 20,
  },
  header: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#2980B9',
    borderRadius: 10,
    elevation: 5,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  description: {
    fontSize: 16,
    color: '#FFFFFF',
    marginTop: 5,
  },
  manageButton: {
    marginTop: 20,
    backgroundColor: '#2980B9',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 25,
    elevation: 3,
    alignItems: 'center',
  },
  manageButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default CircleDetail;
