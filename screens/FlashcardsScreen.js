import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Text, Card, Title, Paragraph } from 'react-native-paper';
import { AppHeader, ScreenContainer, ContentPadding, InfoCard } from '../components/common';
import { ProgressStats } from '../components/flashcard';
import { useFlashcards } from '../hooks';

const FlashcardsScreen = () => {
  const { 
    currentCard, 
    remaining, 
    results, 
    handleCorrect, 
    handleIncorrect, 
    isComplete,
    totalDue 
  } = useFlashcards();

  const [isFlipped, setIsFlipped] = useState(false);
  const [isTraining, setIsTraining] = useState(false);

  const handleStartTraining = () => setIsTraining(true);
  
  const onFlip = () => setIsFlipped(!isFlipped);
  
  const onNext = (correct) => {
    setIsFlipped(false);
    if (correct) handleCorrect();
    else handleIncorrect();
  };

  if (!isTraining) {
    return (
      <ScreenContainer>
        <AppHeader title="Flashcards" />
        <ContentPadding>
          <InfoCard
            title="Spaced Repetition Training"
            description={`You have ${totalDue} algorithms due for review today.`}
          />
          <View style={styles.mainAction}>
            <Button
              mode="contained"
              onPress={handleStartTraining}
              style={styles.startButton}
              icon="play"
              disabled={totalDue === 0}
            >
              Start Training ({totalDue})
            </Button>
          </View>
          <ProgressStats {...results} remaining={remaining} />
        </ContentPadding>
      </ScreenContainer>
    );
  }

  if (isComplete || !currentCard) {
    return (
      <ScreenContainer>
        <AppHeader title="Training Complete" />
        <ContentPadding>
          <InfoCard
            title="Session Complete!"
            description={`You reviewed ${results.correct + results.incorrect} cards.\nCorrect: ${results.correct}\nIncorrect: ${results.incorrect}`}
          />
          <Button mode="contained" onPress={() => setIsTraining(false)}>
            Back to Menu
          </Button>
        </ContentPadding>
      </ScreenContainer>
    );
  }

  return (
    <ScreenContainer>
      <AppHeader title={`Reviewing (${remaining} left)`} />
      <ContentPadding>
        <TouchableOpacity onPress={onFlip} activeOpacity={0.8}>
          <Card style={styles.flashcard}>
            <Card.Content style={styles.cardContent}>
              <Title style={styles.cardTitle}>
                {isFlipped ? currentCard.name : "What is this algorithm?"}
              </Title>
              {/* Placeholder for Algorithm Image/Notation */}
              <View style={styles.placeholderImage}>
                <Text>{isFlipped ? currentCard.notation : "?"}</Text>
              </View>
              {isFlipped && (
                <Paragraph style={styles.description}>
                  {currentCard.category}
                </Paragraph>
              )}
              <Text style={styles.flipHint}>Tap to flip</Text>
            </Card.Content>
          </Card>
        </TouchableOpacity>

        {isFlipped && (
          <View style={styles.responseButtons}>
            <Button 
              mode="contained" 
              onPress={() => onNext(false)} 
              style={[styles.button, styles.incorrectBtn]}
              icon="close"
            >
              Incorrect
            </Button>
            <Button 
              mode="contained" 
              onPress={() => onNext(true)} 
              style={[styles.button, styles.correctBtn]}
              icon="check"
            >
              Correct
            </Button>
          </View>
        )}
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
  flashcard: {
    minHeight: 300,
    justifyContent: 'center',
    marginBottom: 24,
    backgroundColor: '#1a1a1a',
  },
  cardContent: {
    alignItems: 'center',
  },
  cardTitle: {
    color: 'white',
    marginBottom: 20,
  },
  placeholderImage: {
    width: 150,
    height: 150,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 8,
  },
  flipHint: {
    color: '#666',
    marginTop: 10,
  },
  description: {
    color: '#ccc',
    marginTop: 8,
  },
  responseButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    width: '45%',
  },
  correctBtn: {
    backgroundColor: '#4caf50',
  },
  incorrectBtn: {
    backgroundColor: '#f44336',
  },
});

export default FlashcardsScreen;
