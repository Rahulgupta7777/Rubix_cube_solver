import React from 'react';
import { StyleSheet } from 'react-native';
import { List, Switch } from 'react-native-paper';

const SettingsToggle = ({ title, description, icon, value, onValueChange }) => {
  return (
    <List.Item
      title={title}
      description={description}
      left={(props) => <List.Icon {...props} icon={icon} />}
      right={() => (
        <Switch
          value={value}
          onValueChange={onValueChange}
        />
      )}
      titleStyle={styles.title}
      descriptionStyle={styles.description}
    />
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#ffffff',
  },
  description: {
    color: '#999999',
  },
});

export default SettingsToggle;
