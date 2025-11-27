import React, { useState, useMemo } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { AppHeader, ScreenContainer, ContentPadding } from '../components/common';
import { AlgorithmSearch, AlgorithmList } from '../components/algorithm';
import { allAlgorithms, getAlgorithmsByCategory } from '../data';

const AlgorithmLibraryScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAlgorithms = useMemo(() => {
    if (!searchQuery) return allAlgorithms;
    const query = searchQuery.toLowerCase();
    return allAlgorithms.filter(
      alg => alg.name.toLowerCase().includes(query) ||
             alg.notation.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const handleAlgorithmPress = (algorithm) => {
    console.log(`${algorithm.name} pressed`);
  };

  const categories = ['OLL', 'PLL', 'F2L'];

  return (
    <ScreenContainer>
      <AppHeader title="Algorithms" />
      <ContentPadding>
        <AlgorithmSearch
          query={searchQuery}
          onQueryChange={setSearchQuery}
        />
        <ScrollView style={styles.scrollView}>
          {categories.map(category => {
            const categoryAlgorithms = filteredAlgorithms.filter(
              alg => alg.category === category
            );
            if (categoryAlgorithms.length === 0) return null;
            return (
              <AlgorithmList
                key={category}
                algorithms={categoryAlgorithms}
                category={`${category} Algorithms`}
                onAlgorithmPress={handleAlgorithmPress}
              />
            );
          })}
        </ScrollView>
      </ContentPadding>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
});

export default AlgorithmLibraryScreen;
