import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../../utils/cubeUtils';

const ColorPicker = ({ selectedColor, onColorSelect }) => {
  const colors = Object.values(COLORS).filter(c => c !== COLORS.EMPTY);

  return (
    <View style={styles.container}>
      {colors.map((color) => (
        <TouchableOpacity
          key={color}
          style={[
            styles.colorButton,
            { backgroundColor: color },
            selectedColor === color && styles.selected,
          ]}
          onPress={() => onColorSelect(color)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: 8,
  },
  colorButton: {
    width: 40,
    height: 40,
    margin: 4,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#333',
  },
  selected: {
    borderColor: '#ffff99',
    borderWidth: 3,
  },
});

export default ColorPicker;
