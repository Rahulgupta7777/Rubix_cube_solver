import React from 'react';
import { StyleSheet } from 'react-native';
import { List } from 'react-native-paper';

const AboutItem = ({ title, description, icon }) => {
  return (
    <List.Item
      title={title}
      description={description}
      left={(props) => <List.Icon {...props} icon={icon} />}
      disabled
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

export default AboutItem;
