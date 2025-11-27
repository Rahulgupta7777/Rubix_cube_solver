import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

const TipCard = ({ tip, index }) => {
  return (
    <View style={styles.container}>
      <View style={styles.bullet}>
        <Text style={styles.bulletText}>{index + 1}</Text>
      </View>
      <Text style={styles.tip}>{tip}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  bullet: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  bulletText: {
    color: '#ffff99',
    fontSize: 12,
    fontWeight: 'bold',
  },
  tip: {
    flex: 1,
    color: '#cccccc',
    fontSize: 14,
    lineHeight: 20,
  },
});

export default TipCard;
