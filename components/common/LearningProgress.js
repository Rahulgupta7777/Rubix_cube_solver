import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Surface, Text, ProgressBar } from 'react-native-paper';

const LearningProgress = ({ current, total, title }) => {
  const progress = total > 0 ? current / total : 0;

  return (
    <Surface style={styles.container} elevation={1}>
      <View style={styles.header}>
        <Text style={styles.title}>{title || 'Progress'}</Text>
        <Text style={styles.count}>{current}/{total}</Text>
      </View>
      <ProgressBar 
        progress={progress} 
        color="#ffff99" 
        style={styles.bar}
      />
    </Surface>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#1a1a1a',
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  title: {
    color: '#cccccc',
    fontSize: 14,
  },
  count: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  bar: {
    height: 6,
    borderRadius: 3,
    backgroundColor: '#333',
  },
});

export default LearningProgress;
