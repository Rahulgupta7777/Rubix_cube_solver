import React, { useState, useCallback } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { List } from 'react-native-paper';
import { AppHeader, ScreenContainer, ContentPadding } from '../components/common';
import { 
  TimerDisplay, 
  TimerControls, 
  ScrambleDisplay,
  SolveHistoryItem,
  TimerStats
} from '../components/timer';
import { useTimer, useScramble } from '../hooks';

const TimerScreen = () => {
  const { time, isRunning, toggle, reset } = useTimer();
  const { scramble, newScramble } = useScramble();
  const [solves, setSolves] = useState([]);

  const handleToggle = useCallback(() => {
    const finalTime = toggle();
    if (finalTime) {
      setSolves(prev => [{ time: finalTime, scramble }, ...prev]);
      newScramble();
    }
  }, [toggle, scramble, newScramble]);

  const handleReset = () => {
    reset();
  };

  return (
    <ScreenContainer>
      <AppHeader title="Timer" />
      <ContentPadding>
        <ScrambleDisplay scramble={scramble} onNewScramble={newScramble} />
        <TimerDisplay time={time} isRunning={isRunning} />
        <TimerControls 
          isRunning={isRunning} 
          onToggle={handleToggle} 
          onReset={handleReset}
        />
        <TimerStats times={solves.map(s => s.time)} />
        <ScrollView style={styles.historySection}>
          <List.Section>
            <List.Subheader>Recent Times</List.Subheader>
            {solves.slice(0, 10).map((solve, index) => (
              <SolveHistoryItem key={index} solve={solve} index={index} />
            ))}
          </List.Section>
        </ScrollView>
      </ContentPadding>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  historySection: {
    flex: 1,
  },
});

export default TimerScreen;
