import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Appbar, List, Card, Title, Paragraph } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const LearnScreen = () => {
  const tutorialTopics = [
    {
      id: 1,
      title: "Beginner's Method Basics",
      description: "Learn the fundamental layer-by-layer approach",
      icon: "school",
    },
    {
      id: 2,
      title: "CFOP: Cross & F2L",
      description: "Master the first two layers efficiently",
      icon: "layers",
    },
    {
      id: 3,
      title: "CFOP: OLL & PLL",
      description: "Advanced algorithms for the last layer",
      icon: "star",
    },
    {
      id: 4,
      title: "Roux Method",
      description: "Alternative solving approach using blocks",
      icon: "view-grid",
    },
    {
      id: 5,
      title: "Speed Solving Tips",
      description: "Techniques to improve your solve times",
      icon: "speedometer",
    },
  ];

  const handleTopicPress = (topic) => {
    console.log(`${topic.title} pressed`);
  };

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Learn" />
      </Appbar.Header>
      
      <ScrollView style={styles.content}>
        <Title style={styles.sectionTitle}>Tutorial Topics</Title>
        
        {tutorialTopics.map((topic) => (
          <Card 
            key={topic.id} 
            style={styles.topicCard} 
            onPress={() => handleTopicPress(topic)}
          >
            <Card.Content style={styles.cardContent}>
              <View style={styles.topicHeader}>
                <MaterialCommunityIcons 
                  name={topic.icon} 
                  size={32} 
                  color="#ffffff" 
                />
                <View style={styles.topicText}>
                  <Title style={styles.topicTitle}>{topic.title}</Title>
                  <Paragraph style={styles.topicDescription}>
                    {topic.description}
                  </Paragraph>
                </View>
              </View>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>
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
  sectionTitle: {
    marginBottom: 16,
    color: '#ffffff',
    fontSize: 24,
  },
  topicCard: {
    marginBottom: 12,
    borderRadius: 8,
    backgroundColor: '#1a1a1a',
  },
  cardContent: {
    padding: 16,
  },
  topicHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topicText: {
    flex: 1,
    marginLeft: 16,
  },
  topicTitle: {
    fontSize: 18,
    marginBottom: 4,
    color: '#ffffff',
  },
  topicDescription: {
    fontSize: 14,
    color: '#cccccc',
  },
});

export default LearnScreen;
