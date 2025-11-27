import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const MoveNotation = ({ move, size = 'medium' }) => {
  const sizeStyles = {
    small: { fontSize: 14, padding: 6 },
    medium: { fontSize: 18, padding: 8 },
    large: { fontSize: 24, padding: 12 },
  };

  return (
    <View style={[styles.container, { padding: sizeStyles[size].padding }]}>
      <Text style={[styles.move, { fontSize: sizeStyles[size].fontSize }]}>
        {move}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333',
    borderRadius: 4,
    margin: 2,
    minWidth: 36,
    alignItems: 'center',
  },
  move: {
    color: '#ffff99',
    fontFamily: 'monospace',
    fontWeight: 'bold',
  },
});

export default MoveNotation;
