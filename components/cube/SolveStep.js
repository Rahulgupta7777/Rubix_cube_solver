import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const SolveStep = ({ step, current, onPress }) => {
  const isActive = step.step === current;
  const isCompleted = step.step < current;

  return (
    <TouchableOpacity 
      style={[styles.container, isActive && styles.active]}
      onPress={() => onPress && onPress(step)}
    >
      <View style={[styles.number, isCompleted && styles.completed]}>
        {isCompleted ? (
          <MaterialCommunityIcons name="check" size={16} color="#fff" />
        ) : (
          <Text style={styles.numberText}>{step.step}</Text>
        )}
      </View>
      <View style={styles.content}>
        <Text style={styles.name}>{step.name}</Text>
        <Text style={styles.description}>{step.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 12,
    marginBottom: 8,
    borderRadius: 8,
    backgroundColor: '#1a1a1a',
  },
  active: {
    borderColor: '#ffff99',
    borderWidth: 1,
  },
  number: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  completed: {
    backgroundColor: '#4caf50',
  },
  numberText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  name: {
    color: '#ffffff',
    fontWeight: 'bold',
    marginBottom: 2,
  },
  description: {
    color: '#999999',
    fontSize: 12,
  },
});

export default SolveStep;
