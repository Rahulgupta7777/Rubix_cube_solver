import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { List } from 'react-native-paper';
import AlgorithmCard from './AlgorithmCard';

const AlgorithmList = ({ algorithms, category, onAlgorithmPress }) => {
  return (
    <List.Section>
      {category && <List.Subheader>{category}</List.Subheader>}
      <FlatList
        data={algorithms}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <AlgorithmCard 
            algorithm={item} 
            onPress={onAlgorithmPress}
          />
        )}
        scrollEnabled={false}
      />
    </List.Section>
  );
};

export default AlgorithmList;
