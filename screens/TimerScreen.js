import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Appbar, Title, Button, FAB, List, Surface } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const TimerScreen = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState('0.00');

  const handleStartStop = () => {
    console.log(isRunning ? 'Stop pressed' : 'Start pressed');
    setIsRunning(!isRunning);
  };

  const recentTimes = [
    { id: 1, time: '12.34', scramble: "R U R' U' R' F R2 U' R'" },
    { id: 2, time: '15.67', scramble: "F R U' R' U' R U R' F'" },
    { id: 3, time: '18.92', scramble: "R U2 R' U' R U' R'" },
    { id: 4, time: '14.23', scramble: "F R U' R' U' R U R' F'" },
  ];

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Timer" />
        <MaterialCommunityIcons name="timer" size={24} color="white" />
      </Appbar.Header>
      
      <View style={styles.content}>
        <Surface style={styles.timerDisplay} elevation={4}>
          <Title style={styles.timerText}>{time}</Title>
        </Surface>

        <View style={styles.timerControls}>
          <FAB
            icon={isRunning ? "stop" : "play"}
            style={styles.fab}
            onPress={handleStartStop}
            label={isRunning ? "Stop" : "Start"}
          />
        </View>

        <ScrollView style={styles.historySection}>
          <List.Section>
            <List.Subheader>Recent Times</List.Subheader>
            {recentTimes.map((solve) => (
              <List.Item
                key={solve.id}
                title={`${solve.time}s`}
                description={solve.scramble}
                left={(props) => <List.Icon {...props} icon="timer" />}
                right={(props) => <List.Icon {...props} icon="chevron-right" />}
              />
            ))}
          </List.Section>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  timerDisplay: {
    padding: 40,
    marginBottom: 32,
    borderRadius: 16,
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
  },
  timerText: {
    fontSize: 48,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  timerControls: {
    alignItems: 'center',
    marginBottom: 24,
  },
  fab: {
    backgroundColor: '#1a1a1a',
  },
  historySection: {
    flex: 1,
  },
});

export default TimerScreen;
