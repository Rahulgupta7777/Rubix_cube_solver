import React from 'react';
import { View, StyleSheet } from 'react-native';

const ScreenContainer = ({ children, style }) => {
  return (
    <View style={[styles.container, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
});

export default ScreenContainer;
