import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Appbar, Searchbar, List, Card, Title, Paragraph } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const AlgorithmLibraryScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const algorithms = [
    {
      id: 1,
      name: "OLL #27 – Fish Pattern",
      notation: "(R U R' U R U2 R')",
      category: "OLL",
    },
    {
      id: 2,
      name: "PLL #1 – T Permutation",
      notation: "(R U R' U' R' F R2 U' R' U' R U R' F')",
      category: "PLL",
    },
    {
      id: 3,
      name: "F2L Case 1 – Corner Up",
      notation: "(R U' R' U2 R U' R')",
      category: "F2L",
    },
    {
      id: 4,
      name: "OLL #21 – L Shape",
      notation: "(R U2 R' U' R U' R')",
      category: "OLL",
    },
    {
      id: 5,
      name: "PLL #2 – Y Permutation",
      notation: "(F R U' R' U' R U R' F' R U R' U' R' F R F')",
      category: "PLL",
    },
  ];

  const handleAlgorithmPress = (algorithm) => {
    console.log(`${algorithm.name} pressed`);
    console.log(`Algorithm: ${algorithm.notation}`);
    console.log(`Category: ${algorithm.category}`);
    // TODO: Navigate to algorithm detail screen or show modal
  };

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Algorithms" />
      </Appbar.Header>
      
      <View style={styles.content}>
        <Searchbar
          placeholder="Search algorithms..."
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={styles.searchBar}
        />
        
        <ScrollView style={styles.scrollView}>
          <List.Section>
            <List.Subheader>OLL Algorithms</List.Subheader>
            {algorithms
              .filter(alg => alg.category === 'OLL')
              .map((algorithm) => (
                <TouchableOpacity 
                  key={algorithm.id} 
                  onPress={() => handleAlgorithmPress(algorithm)}
                >
                  <Card style={styles.algorithmCard}>
                    <Card.Content>
                      <Title style={styles.algorithmName}>{algorithm.name}</Title>
                      <Paragraph style={styles.algorithmNotation}>
                        {algorithm.notation}
                      </Paragraph>
                    </Card.Content>
                  </Card>
                </TouchableOpacity>
              ))}
          </List.Section>

          <List.Section>
            <List.Subheader>PLL Algorithms</List.Subheader>
            {algorithms
              .filter(alg => alg.category === 'PLL')
              .map((algorithm) => (
                <TouchableOpacity 
                  key={algorithm.id} 
                  onPress={() => handleAlgorithmPress(algorithm)}
                >
                  <Card style={styles.algorithmCard}>
                    <Card.Content>
                      <Title style={styles.algorithmName}>{algorithm.name}</Title>
                      <Paragraph style={styles.algorithmNotation}>
                        {algorithm.notation}
                      </Paragraph>
                    </Card.Content>
                  </Card>
                </TouchableOpacity>
              ))}
          </List.Section>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  searchBar: {
    marginBottom: 16,
  },
  scrollView: {
    flex: 1,
  },
  algorithmCard: {
    marginBottom: 8,
    borderRadius: 8,
    backgroundColor: '#1a1a1a',
  },
  algorithmName: {
    fontSize: 16,
    marginBottom: 4,
    color: '#ffffff',
  },
  algorithmNotation: {
    fontSize: 14,
    color: '#cccccc',
    fontWeight: '500',
  },
});

export default AlgorithmLibraryScreen;
