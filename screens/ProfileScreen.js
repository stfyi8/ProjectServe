import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';

export default function ProfileScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(true);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');

  return (
    <View style={styles.container}>

      {/* Popup */}

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>

            <Text style={styles.modalTitle}>
              Create Your Profile
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Name"
              value={name}
              onChangeText={setName}
            />

            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />

            <TextInput
              style={styles.input}
              placeholder="Gender"
              value={gender}
              onChangeText={setGender}
            />

            <TouchableOpacity
              style={styles.saveButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.saveButtonText}>
                Save
              </Text>
            </TouchableOpacity>

          </View>
        </View>
      </Modal>

      {/* Main Profile Card */}

      <View style={styles.mainCard}>

        <View style={styles.profileCard}>

          <View style={styles.avatar} />

          <View>
            <Text style={styles.name}>
              {name || 'Name'}
            </Text>

            <Text style={styles.info}>
              {email || 'Email'}
            </Text>

            <Text style={styles.info}>
              {gender || 'Gender'}
            </Text>
          </View>

        </View>

        <TouchableOpacity
          style={styles.row}
          onPress={() => navigation.navigate('Settings')}
        >
          <Text style={styles.rowText}>Settings</Text>
          <Text>{'>'}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.row}
          onPress={() => navigation.navigate('Progress')}
        >
          <Text style={styles.rowText}>Progress</Text>
          <Text>{'>'}</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#cfe3ef',
    padding: 20,
  },

  mainCard: {
    flex: 1,
    backgroundColor: '#d9d9d9',
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#7f8b93',
    padding: 15,
  },

  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#7f8b93',
    borderRadius: 40,
    padding: 15,
    marginBottom: 20,
  },

  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'white',
    marginRight: 20,
    borderWidth: 2,
  },

  name: {
    fontSize: 30,
    fontWeight: 'bold',
  },

  info: {
    fontSize: 14,
    color: '#333',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: '#bbb',
  },

  rowText: {
    fontSize: 22,
  },

  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

  modalContainer: {
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
  },

  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
  },

  saveButton: {
    backgroundColor: '#007AFF',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },

  saveButtonText: {
    color: 'white',
    fontSize: 18,
  },

});