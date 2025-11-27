import React from 'react';
import { StyleSheet } from 'react-native';
import { Surface, Title, Paragraph } from 'react-native-paper';

const InfoCard = ({ title, description, style }) => {
  return (
    <Surface style={[styles.card, style]} elevation={2}>
      <Title style={styles.title}>{title}</Title>
      <Paragraph style={styles.description}>{description}</Paragraph>
    </Surface>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    marginBottom: 24,
    borderRadius: 8,
    backgroundColor: '#1a1a1a',
  },
  title: {
    textAlign: 'center',
    marginBottom: 8,
    color: '#ffffff',
  },
  description: {
    textAlign: 'center',
    fontSize: 16,
    color: '#cccccc',
  },
});

export default InfoCard;
