import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Import screens
import HomeScreen from './screens/HomeScreen.js';
import SolverScreen from './screens/SolverScreen.js';
import LearnScreen from './screens/LearnScreen.js';
import AlgorithmLibraryScreen from './screens/AlgorithmLibraryScreen.js';
import FlashcardsScreen from './screens/FlashcardsScreen.js';
import TimerScreen from './screens/TimerScreen.js';
import SettingsScreen from './screens/SettingsScreen.js';

const Tab = createBottomTabNavigator();

// Simple custom dark theme
const customDarkTheme = {
  colors: {
    primary: '#ffff99',
    accent: '#1a1a1a',
    background: '#000000',
    surface: '#1a1a1a',
    text: '#ffffff',
    onSurface: '#ffffff',
    onBackground: '#ffffff',
    placeholder: '#cccccc',
    disabled: '#666666',
  },
};

export default function App() {
  return (
    <PaperProvider theme={customDarkTheme}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Solver') {
                iconName = focused ? 'cube' : 'cube-outline';
              } else if (route.name === 'Learn') {
                iconName = focused ? 'book' : 'book-outline';
              } else if (route.name === 'Algorithms') {
                iconName = focused ? 'format-list-bulleted' : 'format-list-bulleted';
              } else if (route.name === 'Flashcards') {
                iconName = focused ? 'cards' : 'cards-outline';
              } else if (route.name === 'Timer') {
                iconName = focused ? 'timer' : 'timer-outline';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'cog' : 'cog-outline';
              }

              return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#ffff99',
            tabBarInactiveTintColor: '#666666',
            tabBarStyle: {
              backgroundColor: '#000000',
              borderTopColor: '#333333',
            },
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Solver" component={SolverScreen} />
          <Tab.Screen name="Learn" component={LearnScreen} />
          <Tab.Screen name="Algorithms" component={AlgorithmLibraryScreen} />
          <Tab.Screen name="Flashcards" component={FlashcardsScreen} />
          <Tab.Screen name="Timer" component={TimerScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
