import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const StepNavigation = ({ onPrev, onNext, canPrev, canNext }) => {
  return (
    <View style={styles.container}>
      <Button
        mode="outlined"
        onPress={onPrev}
        disabled={!canPrev}
        icon="arrow-left"
        style={styles.button}
      >
        Previous
      </Button>
      <Button
        mode="contained"
        onPress={onNext}
        disabled={!canNext}
        icon="arrow-right"
        contentStyle={styles.nextContent}
        style={styles.button}
      >
        Next
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  button: {
    flex: 1,
    marginHorizontal: 4,
  },
  nextContent: {
    flexDirection: 'row-reverse',
  },
});

export default StepNavigation;
