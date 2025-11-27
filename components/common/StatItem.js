import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, IconButton } from 'react-native-paper';

const StatItem = ({ label, value, icon, color }) => {
  return (
    <View style={styles.container}>
      {icon && (
        <IconButton
          icon={icon}
          size={24}
          iconColor={color || '#ffff99'}
          style={styles.icon}
        />
      )}
      <Text style={[styles.value, color && { color }]}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    minWidth: 70,
  },
  icon: {
    margin: 0,
    padding: 0,
  },
  value: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  label: {
    fontSize: 12,
    color: '#999999',
    marginTop: 2,
  },
});

export default StatItem;
