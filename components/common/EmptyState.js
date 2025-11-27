import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, IconButton } from 'react-native-paper';

const EmptyState = ({ icon, title, message, action, actionLabel }) => {
  return (
    <View style={styles.container}>
      <IconButton
        icon={icon || 'information-outline'}
        size={64}
        iconColor="#666"
      />
      <Text style={styles.title}>{title || 'Nothing here'}</Text>
      {message && <Text style={styles.message}>{message}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
  },
  title: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  message: {
    color: '#999999',
    textAlign: 'center',
    marginTop: 8,
  },
});

export default EmptyState;
