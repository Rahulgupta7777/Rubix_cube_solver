import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import CubeFaceGrid from './CubeFaceGrid';

const CubeNet = ({ cubeState, onCellPress, cellSize = 80 }) => {
  const handleCellPress = (face, cellIndex) => {
    if (onCellPress) {
      onCellPress(face, cellIndex);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.spacer} />
        <CubeFaceGrid 
          face={cubeState.U} 
          onCellPress={(i) => handleCellPress('U', i)}
          size={cellSize}
        />
        <View style={styles.spacer} />
      </View>
      <View style={styles.row}>
        <CubeFaceGrid 
          face={cubeState.L} 
          onCellPress={(i) => handleCellPress('L', i)}
          size={cellSize}
        />
        <CubeFaceGrid 
          face={cubeState.F} 
          onCellPress={(i) => handleCellPress('F', i)}
          size={cellSize}
        />
        <CubeFaceGrid 
          face={cubeState.R} 
          onCellPress={(i) => handleCellPress('R', i)}
          size={cellSize}
        />
      </View>
      <View style={styles.row}>
        <View style={styles.spacer} />
        <CubeFaceGrid 
          face={cubeState.D} 
          onCellPress={(i) => handleCellPress('D', i)}
          size={cellSize}
        />
        <View style={styles.spacer} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 8,
  },
  row: {
    flexDirection: 'row',
  },
  spacer: {
    width: 80,
  },
});

export default CubeNet;
