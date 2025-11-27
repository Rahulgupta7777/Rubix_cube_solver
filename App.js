import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SettingsProvider } from './context';

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

const getTabIcon = (routeName, focused) => {
  const icons = {
    Home: focused ? 'home' : 'home-outline',
    Solver: focused ? 'cube' : 'cube-outline',
    Learn: focused ? 'book' : 'book-outline',
    Algorithms: 'format-list-bulleted',
    Flashcards: focused ? 'cards' : 'cards-outline',
    Timer: focused ? 'timer' : 'timer-outline',
    Settings: focused ? 'cog' : 'cog-outline',
  };
  return icons[routeName] || 'help';
};

export default function App() {
  return (
    <SettingsProvider>
      <PaperProvider theme={customDarkTheme}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => (
                <MaterialCommunityIcons 
                  name={getTabIcon(route.name, focused)} 
                  size={size} 
                  color={color} 
                />
              ),
              tabBarActiveTintColor: '#ffff99',
              tabBarInactiveTintColor: '#666666',
              tabBarStyle: {
                backgroundColor: '#000000',
                borderTopColor: '#333333',
              },
              headerShown: false,
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
    </SettingsProvider>
  );
}
