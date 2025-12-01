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
    marginBottom: 16,
    borderRadius: 16,
    backgroundColor: '#252525',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  content: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    marginLeft: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#ffffff',
  },
  description: {
    fontSize: 14,
    color: '#aaaaaa',
    lineHeight: 20,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.1)',
  },
  chip: {
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chipText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#ffffff',
    lineHeight: 18,
    marginHorizontal: 4,
  },
  duration: {
    marginLeft: 'auto',
    color: '#888888',
    fontSize: 12,
    fontStyle: 'italic',
  },
});

export default TutorialCard;
