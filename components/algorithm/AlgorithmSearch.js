import React from 'react';
import { StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';

const AlgorithmSearch = ({ query, onQueryChange, placeholder }) => {
  return (
    <Searchbar
      placeholder={placeholder || "Search algorithms..."}
      onChangeText={onQueryChange}
      value={query}
      style={styles.searchBar}
      inputStyle={styles.input}
      iconColor="#cccccc"
      placeholderTextColor="#666666"
    />
  );
};

const styles = StyleSheet.create({
  searchBar: {
    marginBottom: 16,
    backgroundColor: '#1a1a1a',
    borderRadius: 8,
  },
  input: {
    color: '#ffffff',
  },
});

export default AlgorithmSearch;
