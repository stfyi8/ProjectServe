import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';

import { ThemeContext } from './ThemeContext';

export default function SettingsScreen() {

  const { darkMode, setDarkMode, theme } =
    useContext(ThemeContext);

  const [quickAccess, setQuickAccess] = useState(true);
  const [backForward, setBackForward] = useState(true);

  const [speed, setSpeed] = useState('1.0');
  const [speedModalVisible, setSpeedModalVisible] = useState(false);

  const [reviewModalVisible, setReviewModalVisible] = useState(false);
  const [reviewText, setReviewText] = useState('');

  const speedOptions = ['0.5', '0.75', '1.0', '1.25', '1.5'];

  const submitReview = () => {
    console.log('Review submitted:', reviewText);

    setReviewText('');
    setReviewModalVisible(false);
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.background }
      ]}
    >

      <View
        style={[
          styles.card,
          { backgroundColor: theme.card }
        ]}
      >

        <Text
          style={[
            styles.sectionTitle,
            { color: theme.secondaryText }
          ]}
        >
          APPEARANCE
        </Text>

        <View
          style={[
            styles.settingBox,
            { backgroundColor: theme.box }
          ]}
        >
          <Text
            style={[
              styles.text,
              { color: theme.text }
            ]}
          >
            Dark Mode
          </Text>

          <Switch
            value={darkMode}
            onValueChange={setDarkMode}
          />
        </View>

        <Text
          style={[
            styles.sectionTitle,
            { color: theme.secondaryText }
          ]}
        >
          STORY
        </Text>

        <View
          style={[
            styles.storyContainer,
            { backgroundColor: theme.box }
          ]}
        >

          <TouchableOpacity
            style={styles.storyRow}
            onPress={() => setSpeedModalVisible(true)}
          >
            <Text
              style={[
                styles.text,
                { color: theme.text }
              ]}
            >
              Speed
            </Text>

            <Text
              style={[
                styles.optionText,
                { color: theme.text }
              ]}
            >
              {speed}x
            </Text>
          </TouchableOpacity>

          <View style={styles.divider} />

          <View style={styles.storyRow}>
            <Text
              style={[
                styles.text,
                { color: theme.text }
              ]}
            >
              Back & Forward Buttons
            </Text>

            <Switch
              value={backForward}
              onValueChange={setBackForward}
            />
          </View>

          <View style={styles.divider} />

          <View style={styles.storyRow}>
            <Text
              style={[
                styles.text,
                { color: theme.text }
              ]}
            >
              Quick Access to Settings
            </Text>

            <Switch
              value={quickAccess}
              onValueChange={setQuickAccess}
            />
          </View>

        </View>

        <TouchableOpacity
          style={[
            styles.reviewButton,
            { backgroundColor: theme.box }
          ]}
          onPress={() => setReviewModalVisible(true)}
        >
          <Text style={styles.reviewText}>
            Leave a Review
          </Text>
        </TouchableOpacity>

      </View>

      {/* SPEED MODAL */}

      <Modal
        visible={speedModalVisible}
        transparent={true}
        animationType="fade"
      >
        <View style={styles.modalBackground}>

          <View
            style={[
              styles.modalContainer,
              { backgroundColor: theme.box }
            ]}
          >

            <Text
              style={[
                styles.modalTitle,
                { color: theme.text }
              ]}
            >
              Choose Story Speed
            </Text>

            {speedOptions.map((option) => (
              <TouchableOpacity
                key={option}
                style={styles.modalButton}
                onPress={() => {
                  setSpeed(option);
                  setSpeedModalVisible(false);
                }}
              >
                <Text
                  style={[
                    styles.modalText,
                    { color: theme.text }
                  ]}
                >
                  {option}x
                </Text>
              </TouchableOpacity>
            ))}

            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() =>
                setSpeedModalVisible(false)
              }
            >
              <Text style={styles.cancelText}>
                Cancel
              </Text>
            </TouchableOpacity>

          </View>

        </View>
      </Modal>

      {/* Review button thing */}

      <Modal
        visible={reviewModalVisible}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalBackground}>

          <View
            style={[
              styles.reviewModalContainer,
              { backgroundColor: theme.box }
            ]}
          >

            <Text
              style={[
                styles.modalTitle,
                { color: theme.text }
              ]}
            >
              Leave a Review
            </Text>

            <TextInput
              style={[
                styles.input,
                {
                  backgroundColor: theme.background,
                  color: theme.text
                }
              ]}
              placeholder="Type your feedback here..."
              placeholderTextColor="gray"
              multiline
              value={reviewText}
              onChangeText={setReviewText}
            />

            <TouchableOpacity
              style={styles.submitButton}
              onPress={submitReview}
            >
              <Text style={styles.submitText}>
                Submit
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                setReviewModalVisible(false)
              }
            >
              <Text style={styles.cancelText}>
                Cancel
              </Text>
            </TouchableOpacity>

          </View>

        </View>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 18,
  },

  card: {
    flex: 1,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: '#7F8B93',
    padding: 18,
  },

  sectionTitle: {
    fontSize: 12,
    marginTop: 15,
    marginBottom: 10,
    letterSpacing: 1,
  },

  settingBox: {
    borderRadius: 15,
    padding: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  storyContainer: {
    borderRadius: 15,
    overflow: 'hidden',
  },

  storyRow: {
    padding: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  divider: {
    height: 1,
    backgroundColor: '#E5E5E5',
    marginHorizontal: 18,
  },

  text: {
    fontSize: 18,
  },

  optionText: {
    fontSize: 18,
  },

  reviewButton: {
    borderRadius: 12,
    padding: 18,
    alignItems: 'center',
    marginTop: 40,
  },

  reviewText: {
    fontSize: 18,
    color: '#007AFF',
  },

  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },

  modalContainer: {
    width: '75%',
    borderRadius: 20,
    padding: 20,
  },

  reviewModalContainer: {
    width: '85%',
    borderRadius: 20,
    padding: 20,
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  modalButton: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },

  modalText: {
    textAlign: 'center',
    fontSize: 18,
  },

  cancelButton: {
    marginTop: 15,
  },

  cancelText: {
    textAlign: 'center',
    color: 'red',
    fontSize: 18,
    marginTop: 15,
  },

  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 10,
    height: 120,
    padding: 10,
    textAlignVertical: 'top',
    marginBottom: 20,
  },

  submitButton: {
    backgroundColor: '#007AFF',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },

  submitText: {
    color: 'white',
    fontSize: 18,
  },

});