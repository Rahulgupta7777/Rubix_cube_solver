import React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import { Text, Surface } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SlideButton } from '../components/common';
import { theme } from '../utils/theme';

const { width } = Dimensions.get('window');

const OnboardingScreen = ({ navigation }) => {
  const handleStart = () => {
    navigation.replace('MainTabs');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Surface style={styles.logoContainer} elevation={4}>
          <MaterialCommunityIcons name="cube-scan" size={80} color={theme.colors.primary} />
        </Surface>
        
        <Text style={styles.title}>Cube Master</Text>
        <Text style={styles.subtitle}>Solve. Learn. Master.</Text>
        
        <View style={styles.features}>
          <FeatureItem icon="camera" text="Instant Solver" />
          <FeatureItem icon="school" text="Learn Methods" />
          <FeatureItem icon="timer" text="Track Progress" />
        </View>
      </View>

      <View style={styles.footer}>
        <SlideButton onComplete={handleStart} text="Slide to Solve" />
      </View>
    </View>
  );
};

const FeatureItem = ({ icon, text }) => (
  <View style={styles.featureItem}>
    <MaterialCommunityIcons name={icon} size={24} color={theme.colors.accent} />
    <Text style={styles.featureText}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    justifyContent: 'space-between',
    paddingVertical: 60,
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logoContainer: {
    width: 120,
    height: 120,
    borderRadius: 30,
    backgroundColor: theme.colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 40,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: 8,
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 18,
    color: theme.colors.textSecondary,
    marginBottom: 40,
    letterSpacing: 0.5,
  },
  features: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  featureItem: {
    alignItems: 'center',
  },
  featureText: {
    color: theme.colors.text,
    marginTop: 8,
    fontSize: 12,
  },
  footer: {
    paddingHorizontal: 20,
  },
});

export default OnboardingScreen;
