import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Surface, Text } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const FeatureCard = ({ icon, title, subtitle, onPress, color }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Surface style={styles.container} elevation={2}>
        <MaterialCommunityIcons 
          name={icon} 
          size={32} 
          color={color || '#ffff99'} 
        />
        <Text style={styles.title}>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </Surface>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    marginBottom: 12,
  },
  title: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 8,
    textAlign: 'center',
  },
  subtitle: {
    color: '#999999',
    fontSize: 12,
    marginTop: 4,
    textAlign: 'center',
  },
});

export default FeatureCard;
