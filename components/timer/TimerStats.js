import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Surface, Text } from 'react-native-paper';
import { formatTimeDisplay, calculateAo5, calculateAo12 } from '../../utils/timerUtils';

const TimerStats = ({ times }) => {
  const ao5 = calculateAo5(times);
  const ao12 = calculateAo12(times);
  const best = times.length > 0 ? Math.min(...times) : null;

  return (
    <Surface style={styles.container} elevation={1}>
      <View style={styles.stat}>
        <Text style={styles.label}>Best</Text>
        <Text style={styles.value}>
          {best ? `${formatTimeDisplay(best)}s` : '-'}
        </Text>
      </View>
      <View style={styles.stat}>
        <Text style={styles.label}>Ao5</Text>
        <Text style={styles.value}>
          {ao5 ? `${formatTimeDisplay(ao5)}s` : '-'}
        </Text>
      </View>
      <View style={styles.stat}>
        <Text style={styles.label}>Ao12</Text>
        <Text style={styles.value}>
          {ao12 ? `${formatTimeDisplay(ao12)}s` : '-'}
        </Text>
      </View>
    </Surface>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#1a1a1a',
    marginBottom: 16,
  },
  stat: {
    alignItems: 'center',
  },
  label: {
    color: '#999999',
    fontSize: 12,
    marginBottom: 4,
  },
  value: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TimerStats;
