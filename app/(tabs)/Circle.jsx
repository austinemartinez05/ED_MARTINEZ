import React, { useState, useContext } from 'react';
import { Image, View, StyleSheet, Text, TouchableOpacity, Alert, TextInput, Modal, Button, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';


const CircleScreen = () => {
  const router = useRouter();
  const [circles, setCircles] = useState([
    { id: 1, name: 'Friends' },
    { id: 2, name: 'Family' },
    { id: 3, name: 'School' },
  ]);
  const [newCircleName, setNewCircleName] = useState('');
  const [editCircleId, setEditCircleId] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const addCircle = () => {
    if (newCircleName.trim()) {
      const newCircle = { id: circles.length + 1, name: newCircleName };
      setCircles([...circles, newCircle]);
      setNewCircleName('');
      Alert.alert('Circle Added', 'The new circle has been successfully added.');
    } else {
      Alert.alert('Error', 'Circle name cannot be empty.');
    }
  };

  const deleteCircle = (id) => {
    const circleToDelete = circles.find(circle => circle.id === id);
    setCircles(circles.filter(circle => circle.id !== id));
    Alert.alert('Circle Deleted', 'The circle has been successfully deleted.');
  };

  const openEditModal = (circle) => {
    setEditCircleId(circle.id);
    setNewCircleName(circle.name);
    setModalVisible(true);
  };

  const editCircle = () => {
    if (newCircleName.trim()) {
      setCircles(circles.map(circle => 
        circle.id === editCircleId ? { ...circle, name: newCircleName } : circle
      ));
      setModalVisible(false);
      setNewCircleName('');
      Alert.alert('Circle Updated', 'The circle has been successfully updated.');
    } else {
      Alert.alert('Error', 'Circle name cannot be empty.');
    }
  };

  const handleCirclePress = (circleId) => {
    router.push(`/CircleDetail?circleId=${circleId}`);
  };

  const renderCircle = ({ item }) => (
    <View key={item.id} style={styles.circleCard}>
      <TouchableOpacity 
        style={styles.circleButton} 
        onPress={() => handleCirclePress(item.id)}
      >
        <Text style={styles.circleName}>{item.name}</Text>
      </TouchableOpacity>
      <View style={styles.circleActions}>
        <TouchableOpacity style={styles.iconButton} onPress={() => openEditModal(item)}>
          <Ionicons name="pencil" size={20} color="#F39C12" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={() => deleteCircle(item.id)}>
          <Ionicons name="trash" size={20} color="#E74C3C" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Circles</Text>

      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input}
          placeholder="Add new circle"
          value={newCircleName}
          onChangeText={setNewCircleName}
        />
        <TouchableOpacity onPress={addCircle} style={styles.addButton}>
          <Ionicons name="add-circle" size={40} color="#4CAF50" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={circles}
        renderItem={renderCircle}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.circleList}
      />

      {/* Edit Circle Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Edit Circle</Text>
            <TextInput 
              style={styles.modalInput}
              placeholder="Edit circle name"
              value={newCircleName}
              onChangeText={setNewCircleName}
            />
            <View style={styles.modalButtonContainer}>
            <Button title="Save" onPress={editCircle} color="#2196F3" />
            <Button title="Cancel" onPress={() => setModalVisible(false)} color="#F44336" />
            </View>
          </View>
        </View>
      </Modal>
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
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  input: {
    flex: 1,
    height: 50,
    borderColor: '#BDC3C7',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: '#FFFFFF',
  },
  addButton: {
    marginLeft: 10,
  },
  circleCard: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 15,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  circleButton: {
    flex: 1,
  },
  circleName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2980B9',
  },
  circleActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 10,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalInput: {
    height: 40,
    borderColor: '#BDC3C7',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    width: '100%',
  },
  modalButtonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  circleList: {
    paddingBottom: 40,
  },
});

export default CircleScreen;
