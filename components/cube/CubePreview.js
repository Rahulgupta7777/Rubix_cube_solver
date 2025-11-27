import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Surface, Text } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CubePreview = ({ title, icon }) => {
  return (
    <Surface style={styles.container} elevation={1}>
      <Text style={styles.title}>{title || 'Cube Preview'}</Text>
      <MaterialCommunityIcons 
        name={icon || 'cube-outline'} 
        size={80} 
        color="#ccc" 
      />
    </Surface>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#1a1a1a',
  },
  title: {
    marginBottom: 12,
    fontSize: 16,
    color: '#cccccc',
  },
});

export default CubePreview;
