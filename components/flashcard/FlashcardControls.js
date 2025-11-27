import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const FlashcardControls = ({ onCorrect, onIncorrect, onSkip }) => {
  return (
    <View style={styles.container}>
      <Button 
        mode="outlined" 
        onPress={onIncorrect}
        style={styles.button}
        textColor="#ff4444"
      >
        Incorrect
      </Button>
      <Button 
        mode="outlined" 
        onPress={onSkip}
        style={styles.button}
        textColor="#999999"
      >
        Skip
      </Button>
      <Button 
        mode="contained" 
        onPress={onCorrect}
        style={styles.button}
        buttonColor="#4caf50"
      >
        Correct
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
});

export default FlashcardControls;
