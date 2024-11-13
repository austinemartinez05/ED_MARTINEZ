import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';

const MemberManagement = () => {
  const [members, setMembers] = useState([]);
  const [newMember, setNewMember] = useState('');

  const addMember = () => {
    if (newMember.trim()) {
      const newId = members.length + 1; // Simple ID generation
      setMembers([...members, { id: newId, name: newMember }]);
      setNewMember(''); // Clear the input field
    }
  };

  const removeMember = (id) => {
    const memberToRemove = members.find(member => member.id === id);
    setMembers(members.filter(member => member.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manage Members</Text>

      <TextInput
        style={styles.input}
        placeholder="Add a new member..."
        value={newMember}
        onChangeText={setNewMember}
        placeholderTextColor="#BDC3C7"
      />
      <TouchableOpacity style={styles.addButton} onPress={addMember}>
        <Text style={styles.addButtonText}>Add Member</Text>
      </TouchableOpacity>

      <FlatList
        data={members}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.memberContainer}>
            <Text style={styles.memberText}>{item.name}</Text>
            <TouchableOpacity onPress={() => removeMember(item.id)}>
              <Text style={styles.removeButton}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
        contentContainerStyle={styles.memberList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FC',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2980B9',
  },
  input: {
    borderWidth: 1,
    borderColor: '#BDC3C7',
    borderRadius: 25,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
  },
  addButton: {
    backgroundColor: '#2980B9',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 25,
    alignItems: 'center',
    elevation: 3,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  memberContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginVertical: 5,
    elevation: 2,
  },
  memberText: {
    fontSize: 16,
    color: '#2C3E50',
  },
  removeButton: {
    color: '#E74C3C', // Red color for remove action
    fontWeight: 'bold',
  },
  memberList: {
    paddingBottom: 10,
  },
});

export default MemberManagement;
