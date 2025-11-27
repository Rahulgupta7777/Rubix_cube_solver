import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';

const CategoryFilter = ({ categories, selected, onSelect }) => {
  return (
    <View style={styles.container}>
      <Button
        mode={!selected ? 'contained' : 'outlined'}
        onPress={() => onSelect(null)}
        style={styles.button}
        compact
      >
        All
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          mode={selected === category ? 'contained' : 'outlined'}
          onPress={() => onSelect(category)}
          style={styles.button}
          compact
        >
          {category}
        </Button>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  button: {
    marginRight: 8,
    marginBottom: 8,
  },
});

export default CategoryFilter;
