import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar, Card, Title, Paragraph, Button, Surface } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const HomeScreen = () => {
  const handleSolveCube = () => {
    console.log('Solve Cube pressed');
  };

  const handleLearnAlgorithms = () => {
    console.log('Learn Algorithms pressed');
  };

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Rubix cube solver & Trainer" />
      </Appbar.Header>

      <View style={styles.content}>
        <Surface style={styles.welcomeCard} elevation={2}>
          <Title style={styles.welcomeTitle}>
            Welcome to Rubix cube solver!
          </Title>
          <Paragraph style={styles.welcomeText}>
            Master the art of solving Rubik's Cubes with step-by-step guidance
            and practice tools.
          </Paragraph>
        </Surface>

        <View style={styles.actionButtons}>
          <Card style={styles.actionCard} onPress={handleSolveCube}>
            <Card.Content style={styles.cardContent}>
              <MaterialCommunityIcons name="cube" size={48} color="#ffffff" />
              <Title style={styles.cardTitle}>Solve a Cube</Title>
              <Paragraph>
                Get instant solutions for any scrambled cube
              </Paragraph>
            </Card.Content>
          </Card>

          <Card style={styles.actionCard} onPress={handleLearnAlgorithms}>
            <Card.Content style={styles.cardContent}>
              <MaterialCommunityIcons
                name="book-open-variant"
                size={48}
                color="#ffffff"
              />
              <Title style={styles.cardTitle}>Learn Algorithms</Title>
              <Paragraph>Master solving methods and techniques</Paragraph>
            </Card.Content>
          </Card>
        </View>
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
  welcomeCard: {
    padding: 20,
    marginBottom: 24,
    borderRadius: 8,
    backgroundColor: '#1a1a1a',
  },
  welcomeTitle: {
    textAlign: 'center',
    marginBottom: 8,
    color: '#ffffff',
  },
  welcomeText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#cccccc',
  },
  actionButtons: {
    flex: 1,
    justifyContent: 'center',
  },
  actionCard: {
    marginBottom: 16,
    borderRadius: 12,
    backgroundColor: '#1a1a1a',
  },
  cardContent: {
    alignItems: 'center',
    padding: 20,
  },
  cardTitle: {
    marginTop: 12,
    marginBottom: 8,
    textAlign: 'center',
    color: '#ffffff',
  },
});

export default HomeScreen;
