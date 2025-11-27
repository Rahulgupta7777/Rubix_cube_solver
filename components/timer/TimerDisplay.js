import React from 'react';
import { StyleSheet } from 'react-native';
import { Surface, Title } from 'react-native-paper';
import { formatTimeDisplay } from '../../utils/timerUtils';

const TimerDisplay = ({ time, isRunning }) => {
  return (
    <Surface style={styles.container} elevation={4}>
      <Title style={[
        styles.time,
        isRunning && styles.running
      ]}>
        {formatTimeDisplay(time)}
      </Title>
    </Surface>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 40,
    marginBottom: 32,
    borderRadius: 16,
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
  },
  time: {
    fontSize: 56,
    color: '#ffffff',
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
  running: {
    color: '#4caf50',
  },
});

export default TimerDisplay;
