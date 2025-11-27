import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FAB, Button } from 'react-native-paper';

const TimerControls = ({ isRunning, onToggle, onReset }) => {
  return (
    <View style={styles.container}>
      <FAB
        icon={isRunning ? 'stop' : 'play'}
        style={styles.fab}
        onPress={onToggle}
        label={isRunning ? 'Stop' : 'Start'}
      />
      {!isRunning && (
        <Button 
          mode="outlined" 
          onPress={onReset}
          style={styles.resetButton}
        >
          Reset
        </Button>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 24,
  },
  fab: {
    backgroundColor: '#1a1a1a',
    marginBottom: 12,
  },
  resetButton: {
    marginTop: 8,
  },
});

export default TimerControls;
