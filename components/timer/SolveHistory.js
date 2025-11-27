import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { List } from 'react-native-paper';
import SolveHistoryItem from './SolveHistoryItem';

const SolveHistory = ({ solves, onSolvePress, emptyMessage }) => {
  if (solves.length === 0) {
    return (
      <View style={styles.empty}>
        <List.Item
          title={emptyMessage || "No solves yet"}
          description="Start timing to record solves"
          left={(props) => <List.Icon {...props} icon="timer-off" />}
        />
      </View>
    );
  }

  return (
    <FlatList
      data={solves}
      keyExtractor={(item, index) => `solve-${index}`}
      renderItem={({ item, index }) => (
        <SolveHistoryItem
          solve={item}
          index={index}
        />
      )}
      style={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  empty: {
    padding: 16,
    backgroundColor: '#1a1a1a',
    borderRadius: 8,
  },
});

export default SolveHistory;
