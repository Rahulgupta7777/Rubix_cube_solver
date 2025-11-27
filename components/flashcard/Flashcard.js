import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const Flashcard = ({ algorithm, onResult }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleReveal = () => setShowAnswer(true);
  
  const handleResult = (correct) => {
    setShowAnswer(false);
    onResult && onResult(algorithm, correct);
  };

  return (
    <Card style={styles.card}>
      <Card.Content style={styles.content}>
        <Title style={styles.title}>{algorithm.name}</Title>
        {showAnswer ? (
          <Paragraph style={styles.notation}>
            {algorithm.notation}
          </Paragraph>
        ) : (
          <TouchableOpacity onPress={handleReveal}>
            <Paragraph style={styles.hint}>Tap to reveal</Paragraph>
          </TouchableOpacity>
        )}
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    marginBottom: 16,
  },
  content: {
    alignItems: 'center',
    padding: 24,
  },
  title: {
    color: '#ffffff',
    marginBottom: 16,
  },
  notation: {
    color: '#ffff99',
    fontSize: 16,
    fontFamily: 'monospace',
  },
  hint: {
    color: '#666666',
    fontStyle: 'italic',
  },
});

export default Flashcard;
