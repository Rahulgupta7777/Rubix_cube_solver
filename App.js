import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SettingsProvider } from './context';
import { theme } from './utils/theme';

// Import screens
import OnboardingScreen from './screens/OnboardingScreen.js';
import HomeScreen from './screens/HomeScreen.js';
import SolverScreen from './screens/SolverScreen.js';
import LearnScreen from './screens/LearnScreen.js';
import TimerScreen from './screens/TimerScreen.js';
import SettingsScreen from './screens/SettingsScreen.js';
import AlgorithmLibraryScreen from './screens/AlgorithmLibraryScreen.js';
import FlashcardsScreen from './screens/FlashcardsScreen.js';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Adapt custom theme to Paper's format
const paperTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    onBackground: theme.colors.text,
    placeholder: theme.colors.textSecondary,
    disabled: theme.colors.textSecondary,
  },
};

const getTabIcon = (routeName, focused) => {
  const icons = {
    Home: focused ? 'home' : 'home-outline',
    Solver: focused ? 'cube' : 'cube-outline',
    Learn: focused ? 'school' : 'school-outline',
    Timer: focused ? 'timer' : 'timer-outline',
  };
  return icons[routeName] || 'help';
};

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => (
          <MaterialCommunityIcons 
            name={getTabIcon(route.name, focused)} 
            size={size} 
            color={color} 
          />
        ),
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.textSecondary,
        tabBarStyle: {
          backgroundColor: theme.colors.surface,
          borderTopColor: theme.colors.border,
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Solver" component={SolverScreen} />
      <Tab.Screen name="Learn" component={LearnScreen} />
      <Tab.Screen name="Timer" component={TimerScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SettingsProvider>
      <PaperProvider theme={paperTheme}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Onboarding" component={OnboardingScreen} />
            <Stack.Screen name="MainTabs" component={MainTabs} />
            {/* Nested screens accessible from Home/Learn */}
            <Stack.Screen name="Algorithms" component={AlgorithmLibraryScreen} />
            <Stack.Screen name="Flashcards" component={FlashcardsScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SettingsProvider>
  );
}
