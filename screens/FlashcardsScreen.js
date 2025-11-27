import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, List } from 'react-native-paper';
import { AppHeader, ScreenContainer, ContentPadding, InfoCard } from '../components/common';
import { ProgressStats } from '../components/flashcard';
import { SettingsSection } from '../components/settings';

const FlashcardsScreen = () => {
  const [stats, setStats] = useState({ correct: 0, incorrect: 0, remaining: 24 });

  const handleStartTraining = () => console.log('Start Training pressed');
  const handleSelectSet = () => console.log('Select Algorithm Set pressed');

  return (
    <ScreenContainer>
      <AppHeader title="Flashcards" />
      <ContentPadding>
        <InfoCard
          title="Practice your algorithms with spaced repetition flashcards"
          description="Improve your muscle memory and recognition speed by practicing algorithms with our intelligent flashcard system."
        />
        <View style={styles.mainAction}>
          <Button
            mode="contained"
            onPress={handleStartTraining}
            style={styles.startButton}
            icon="play"
          >
            Start Training
          </Button>
        </View>
        <SettingsSection title="Training Options">
          <List.Item
            title="Algorithm Set"
            description="All Algorithms"
            left={(props) => <List.Icon {...props} icon="format-list-bulleted" />}
            right={(props) => <List.Icon {...props} icon="chevron-right" />}
            onPress={handleSelectSet}
          />
          <List.Item
            title="Difficulty Level"
            description="Mixed"
            left={(props) => <List.Icon {...props} icon="chart-line" />}
            right={(props) => <List.Icon {...props} icon="chevron-right" />}
          />
        </SettingsSection>
        <ProgressStats {...stats} />
      </ContentPadding>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  mainAction: {
    marginBottom: 24,
    alignItems: 'center',
  },
  startButton: {
    borderRadius: 25,
    paddingHorizontal: 32,
  },
});

export default FlashcardsScreen;
