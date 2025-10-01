import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar, Card, Title, Paragraph, Button, List, Surface } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const FlashcardsScreen = () => {
  const handleStartTraining = () => {
    console.log('Start Training pressed');
  };

  const handleSelectSet = () => {
    console.log('Select Algorithm Set pressed');
  };

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Flashcards" />
      </Appbar.Header>
      
      <View style={styles.content}>
        <Surface style={styles.descriptionCard} elevation={2}>
          <Title style={styles.descriptionTitle}>Practice your algorithms with spaced repetition flashcards</Title>
          <Paragraph style={styles.descriptionText}>
            Improve your muscle memory and recognition speed by practicing algorithms with our intelligent flashcard system.
          </Paragraph>
        </Surface>

        <View style={styles.mainAction}>
          <Button
            mode="contained"
            onPress={handleStartTraining}
            style={styles.startButton}
            contentStyle={styles.buttonContent}
            icon="play"
          >
            Start Training
          </Button>
        </View>

        <Card style={styles.optionsCard}>
          <Card.Content>
            <Title style={styles.optionsTitle}>Training Options</Title>
            
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
          </Card.Content>
        </Card>

        <Surface style={styles.statsCard} elevation={1}>
          <Title style={styles.statsTitle}>Progress Stats</Title>
          <Paragraph style={styles.statsText}>No stats yet - start training to track your progress!</Paragraph>
        </Surface>
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
  descriptionCard: {
    padding: 20,
    marginBottom: 24,
    borderRadius: 8,
    backgroundColor: '#1a1a1a',
  },
  descriptionTitle: {
    textAlign: 'center',
    marginBottom: 8,
    color: '#ffffff',
  },
  descriptionText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#cccccc',
  },
  mainAction: {
    marginBottom: 24,
    alignItems: 'center',
  },
  startButton: {
    borderRadius: 25,
    paddingHorizontal: 32,
  },
  buttonContent: {
    paddingVertical: 8,
  },
  optionsCard: {
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: '#1a1a1a',
  },
  optionsTitle: {
    marginBottom: 8,
    color: '#ffffff',
  },
  statsCard: {
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
  },
  statsTitle: {
    marginBottom: 8,
    color: '#cccccc',
  },
  statsText: {
    textAlign: 'center',
    color: '#999999',
  },
});

export default FlashcardsScreen;
