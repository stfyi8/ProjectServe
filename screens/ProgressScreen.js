import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';

import { stories, sideStories } from './progressData';

export default function ProgressScreen() {

  const totalCompleted =
    stories.filter(story => story.completed).length +
    sideStories.filter(story => story.completed).length;

  const totalStories =
    stories.length + sideStories.length;

  const resetProgress = () => {
    Alert.alert(
      'Reset Progress',
      'This feature will be added later.'
    );
  };

  return (
    <View style={styles.container}>

      <View style={styles.card}>

        <ScrollView>

          <Text style={styles.sectionTitle}>
            STORIES
          </Text>

          <View style={styles.listBox}>
            {stories.map((story, index) => (
              <View
                key={index}
                style={styles.row}
              >
                <Text style={styles.storyText}>
                  {story.title}
                </Text>

                <Text
                  style={[
                    styles.statusText,
                    {
                      color: story.completed
                        ? 'green'
                        : 'gray'
                    }
                  ]}
                >
                  {story.completed
                    ? 'Completed'
                    : 'Not Started'}
                </Text>
              </View>
            ))}
          </View>

          <Text style={styles.sectionTitle}>
            SIDE STORIES
          </Text>

          <View style={styles.listBox}>
            {sideStories.map((story, index) => (
              <View
                key={index}
                style={styles.row}
              >
                <Text style={styles.storyText}>
                  {story.title}
                </Text>

                <Text
                  style={[
                    styles.statusText,
                    {
                      color: story.completed
                        ? 'green'
                        : 'gray'
                    }
                  ]}
                >
                  {story.completed
                    ? 'Completed'
                    : 'Not Started'}
                </Text>
              </View>
            ))}
          </View>

          <View style={styles.progressBox}>
            <Text style={styles.progressTitle}>
              Overall Progress
            </Text>

            <Text style={styles.progressNumber}>
              {totalCompleted}/{totalStories}
            </Text>
          </View>

          <TouchableOpacity
            style={styles.resetButton}
            onPress={resetProgress}
          >
            <Text style={styles.resetText}>
              Reset Progress
            </Text>
          </TouchableOpacity>

        </ScrollView>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#B8D4E3',
    padding: 18,
  },

  card: {
    flex: 1,
    backgroundColor: '#D9D9D9',
    borderRadius: 35,
    borderWidth: 2,
    borderColor: '#7F8B93',
    padding: 18,
  },

  sectionTitle: {
    color: '#8A8A8A',
    fontSize: 12,
    marginTop: 15,
    marginBottom: 10,
    letterSpacing: 1,
  },

  listBox: {
    backgroundColor: 'white',
    borderRadius: 15,
    overflow: 'hidden',
  },

  row: {
    padding: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },

  storyText: {
    fontSize: 18,
  },

  statusText: {
    fontSize: 16,
  },

  progressBox: {
    backgroundColor: 'white',
    borderRadius: 15,
    alignItems: 'center',
    padding: 20,
    marginTop: 30,
  },

  progressTitle: {
    fontSize: 18,
  },

  progressNumber: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 10,
  },

  resetButton: {
    backgroundColor: '#FF3B30',
    borderRadius: 15,
    padding: 18,
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },

  resetText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

});