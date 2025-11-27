import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Text } from 'react-native-paper';
import MoveNotation from './MoveNotation';

const AlgorithmDisplay = ({ notation, title }) => {
  const moves = notation.replace(/[()]/g, '').split(/\s+/).filter(m => m);

  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}
      <View style={styles.movesContainer}>
        {moves.map((move, index) => (
          <MoveNotation key={index} move={move} size="medium" />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: '#1a1a1a',
    borderRadius: 8,
  },
  title: {
    color: '#ffffff',
    marginBottom: 8,
    fontWeight: 'bold',
  },
  movesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default AlgorithmDisplay;
