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
    paddingVertical: 32,
    paddingHorizontal: 24,
    marginBottom: 32,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1e1e1e',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    minHeight: 200,
  },
  time: {
    fontSize: 64,
    lineHeight: 80,
    color: '#ffffff',
    fontWeight: '700',
    fontFamily: 'monospace',
    letterSpacing: 2,
    includeFontPadding: false,
    textAlign: 'center',
  },
  running: {
    color: '#4caf50',
    textShadowColor: 'rgba(76, 175, 80, 0.4)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
});

export default TimerDisplay;
