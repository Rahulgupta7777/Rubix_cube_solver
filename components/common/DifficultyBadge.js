import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Surface, Text, Chip } from 'react-native-paper';

const DifficultyBadge = ({ level }) => {
  const colors = {
    beginner: '#4caf50',
    intermediate: '#ff9800',
    advanced: '#f44336',
  };

  return (
    <Chip 
      style={[styles.badge, { backgroundColor: colors[level] || '#999' }]}
      textStyle={styles.text}
    >
      {level}
    </Chip>
  );
};

const styles = StyleSheet.create({
  badge: {
    height: 26,
  },
  text: {
    fontSize: 11,
    color: '#ffffff',
  },
});

export default DifficultyBadge;
