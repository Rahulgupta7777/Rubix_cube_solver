import React from 'react';
import { StyleSheet } from 'react-native';
import { List } from 'react-native-paper';

const SettingsLink = ({ title, description, icon, onPress }) => {
  return (
    <List.Item
      title={title}
      description={description}
      left={(props) => <List.Icon {...props} icon={icon} />}
      right={(props) => <List.Icon {...props} icon="chevron-right" />}
      onPress={onPress}
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

export default SettingsLink;
