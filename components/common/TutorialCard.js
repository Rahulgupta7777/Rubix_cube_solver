import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Chip } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const TutorialCard = ({ tutorial, onPress }) => {
  const getLevelColor = (level) => {
    switch (level) {
      case 'beginner': return '#4caf50';
      case 'intermediate': return '#ff9800';
      case 'advanced': return '#f44336';
      default: return '#999999';
    }
  };

  return (
    <Card style={styles.card} onPress={() => onPress && onPress(tutorial)}>
      <Card.Content style={styles.content}>
        <View style={styles.header}>
          <MaterialCommunityIcons
            name={tutorial.icon}
            size={32}
            color="#ffffff"
          />
          <View style={styles.textContainer}>
            <Title style={styles.title}>{tutorial.title}</Title>
            <Paragraph style={styles.description}>
              {tutorial.description}
            </Paragraph>
          </View>
        </View>
        <View style={styles.footer}>
          <Chip 
            style={[styles.chip, { backgroundColor: getLevelColor(tutorial.level) }]}
            textStyle={styles.chipText}
          >
            {tutorial.level}
          </Chip>
          {tutorial.duration && (
            <Paragraph style={styles.duration}>{tutorial.duration}</Paragraph>
          )}
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 12,
    borderRadius: 8,
    backgroundColor: '#1a1a1a',
  },
  content: {
    padding: 12,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  textContainer: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    fontSize: 16,
    marginBottom: 4,
    color: '#ffffff',
  },
  description: {
    fontSize: 13,
    color: '#cccccc',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  chip: {
    height: 24,
  },
  chipText: {
    fontSize: 11,
    color: '#ffffff',
  },
  duration: {
    marginLeft: 'auto',
    color: '#999999',
    fontSize: 12,
  },
});

export default TutorialCard;
