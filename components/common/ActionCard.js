import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ActionCard = ({ icon, title, description, onPress, iconColor }) => {
  return (
    <Card style={styles.card} onPress={onPress}>
      <Card.Content style={styles.content}>
        <MaterialCommunityIcons 
          name={icon} 
          size={48} 
          color={iconColor || '#ffffff'} 
        />
        <Title style={styles.title}>{title}</Title>
        <Paragraph style={styles.description}>{description}</Paragraph>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
    borderRadius: 12,
    backgroundColor: '#1a1a1a',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    marginTop: 12,
    marginBottom: 8,
    textAlign: 'center',
    color: '#ffffff',
  },
  description: {
    textAlign: 'center',
    color: '#cccccc',
  },
});

export default ActionCard;
