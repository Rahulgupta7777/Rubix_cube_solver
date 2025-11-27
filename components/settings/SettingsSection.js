import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Title } from 'react-native-paper';

const SettingsSection = ({ title, children }) => {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Title style={styles.title}>{title}</Title>
        {children}
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: '#1a1a1a',
  },
  title: {
    marginBottom: 8,
    color: '#ffffff',
    fontSize: 18,
  },
});

export default SettingsSection;
