import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Title } from 'react-native-paper';
import { 
  AppHeader, 
  ScreenContainer, 
  ContentPadding,
  TutorialCard,
  ActionCard
} from '../components/common';
import { tutorialTopics } from '../data';

const LearnScreen = ({ navigation }) => {
  const handleTopicPress = (topic) => {
    console.log(`${topic.title} pressed`);
  };

  return (
    <ScreenContainer>
      <AppHeader title="Learn" />
      <ScrollView style={styles.content}>
        <ContentPadding>
          <View style={styles.toolsSection}>
            <Title style={styles.sectionTitle}>Tools</Title>
            <ActionCard
              icon="format-list-bulleted"
              title="Algorithm Library"
              description="Browse OLL, PLL, and F2L algorithms"
              onPress={() => navigation.navigate('Algorithms')}
            />
            <ActionCard
              icon="cards"
              title="Flashcards"
              description="Practice algorithms with spaced repetition"
              onPress={() => navigation.navigate('Flashcards')}
            />
          </View>

          <Title style={styles.sectionTitle}>Tutorial Topics</Title>
          {tutorialTopics.map((topic) => (
            <TutorialCard
              key={topic.id}
              tutorial={topic}
              onPress={handleTopicPress}
            />
          ))}
        </ContentPadding>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  sectionTitle: {
    marginBottom: 16,
    marginTop: 8,
    color: '#ffffff',
    fontSize: 24,
  },
  toolsSection: {
    marginBottom: 24,
  },
});

export default LearnScreen;
