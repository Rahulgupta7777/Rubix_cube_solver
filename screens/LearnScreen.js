import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';
import { 
  AppHeader, 
  ScreenContainer, 
  ContentPadding,
  TutorialCard 
} from '../components/common';
import { tutorialTopics } from '../data';

const LearnScreen = () => {
  const handleTopicPress = (topic) => {
    console.log(`${topic.title} pressed`);
  };

  return (
    <ScreenContainer>
      <AppHeader title="Learn" />
      <ScrollView style={styles.content}>
        <ContentPadding>
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
    color: '#ffffff',
    fontSize: 24,
  },
});

export default LearnScreen;
