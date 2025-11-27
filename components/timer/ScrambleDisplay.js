import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Surface, Text, IconButton } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ScrambleDisplay = ({ scramble, onNewScramble }) => {
  return (
    <Surface style={styles.container} elevation={2}>
      <View style={styles.header}>
        <MaterialCommunityIcons name="shuffle" size={20} color="#ccc" />
        <Text style={styles.label}>Scramble</Text>
        <IconButton
          icon="refresh"
          size={20}
          onPress={onNewScramble}
          iconColor="#ccc"
        />
      </View>
      <Text style={styles.scramble}>{scramble}</Text>
    </Surface>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: '#1a1a1a',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  label: {
    flex: 1,
    marginLeft: 8,
    color: '#cccccc',
    fontSize: 14,
  },
  scramble: {
    color: '#ffff99',
    fontSize: 14,
    fontFamily: 'monospace',
    textAlign: 'center',
  },
});

export default ScrambleDisplay;
