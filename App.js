import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';
import ProgressScreen from './screens/ProgressScreen';

import { ThemeProvider } from './screens/ThemeContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Profile"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#B8D4E3',
            },
            headerTintColor: '#000',
            headerTitleAlign: 'center',
          }}
        >
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
          />

          <Stack.Screen
            name="Settings"
            component={SettingsScreen}
          />

          <Stack.Screen
            name="Progress"
            component={ProgressScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
