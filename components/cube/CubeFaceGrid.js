import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../../utils/cubeUtils';

const CubeFaceGrid = ({ face, onCellPress, size = 100 }) => {
  const cellSize = size / 3;

  return (
    <View style={[styles.grid, { width: size, height: size }]}>
      {face.map((color, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.cell,
            { 
              width: cellSize - 4, 
              height: cellSize - 4,
              backgroundColor: color || COLORS.EMPTY,
            },
          ]}
          onPress={() => onCellPress && onCellPress(index)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 2,
  },
  cell: {
    margin: 2,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#000',
  },
});

export default CubeFaceGrid;
