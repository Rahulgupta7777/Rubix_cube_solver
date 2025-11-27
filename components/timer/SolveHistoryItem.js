import React from 'react';
import { StyleSheet } from 'react-native';
import { List } from 'react-native-paper';
import { formatTimeDisplay } from '../../utils/timerUtils';

const SolveHistoryItem = ({ solve, index }) => {
  return (
    <List.Item
      title={`${formatTimeDisplay(solve.time)}s`}
      description={solve.scramble}
      left={(props) => <List.Icon {...props} icon="timer" />}
      right={(props) => (
        <List.Icon {...props} icon="chevron-right" />
      )}
      style={styles.item}
      titleStyle={styles.title}
      descriptionStyle={styles.description}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#1a1a1a',
    marginBottom: 4,
    borderRadius: 4,
  },
  title: {
    color: '#ffffff',
  },
  description: {
    color: '#999999',
    fontSize: 12,
  },
});

export default SolveHistoryItem;
