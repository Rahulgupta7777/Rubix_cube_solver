import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const AlgorithmCard = ({ algorithm, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress && onPress(algorithm)}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.name}>{algorithm.name}</Title>
          <Paragraph style={styles.notation}>
            {algorithm.notation}
          </Paragraph>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 8,
    borderRadius: 8,
    backgroundColor: '#1a1a1a',
  },
  name: {
    fontSize: 16,
    marginBottom: 4,
    color: '#ffffff',
  },
  notation: {
    fontSize: 14,
    color: '#ffff99',
    fontFamily: 'monospace',
  },
});

export default AlgorithmCard;
