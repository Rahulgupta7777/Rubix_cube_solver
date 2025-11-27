import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Surface, Title, Paragraph } from 'react-native-paper';

const ProgressStats = ({ correct, incorrect, remaining }) => {
  const total = correct + incorrect + remaining;
  const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;

  return (
    <Surface style={styles.container} elevation={1}>
      <Title style={styles.title}>Progress</Title>
      <View style={styles.statsRow}>
        <View style={styles.stat}>
          <Paragraph style={styles.value}>{correct}</Paragraph>
          <Paragraph style={styles.label}>Correct</Paragraph>
        </View>
        <View style={styles.stat}>
          <Paragraph style={styles.value}>{incorrect}</Paragraph>
          <Paragraph style={styles.label}>Incorrect</Paragraph>
        </View>
        <View style={styles.stat}>
          <Paragraph style={styles.value}>{percentage}%</Paragraph>
          <Paragraph style={styles.label}>Accuracy</Paragraph>
        </View>
      </View>
    </Surface>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#1a1a1a',
  },
  title: {
    textAlign: 'center',
    marginBottom: 12,
    color: '#cccccc',
    fontSize: 16,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  stat: {
    alignItems: 'center',
  },
  value: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  label: {
    color: '#999999',
    fontSize: 12,
  },
});

export default ProgressStats;
