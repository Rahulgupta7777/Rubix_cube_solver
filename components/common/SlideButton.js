import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Animated, PanResponder, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from '../../utils/theme';

const BUTTON_HEIGHT = 60;
const BUTTON_WIDTH = Dimensions.get('window').width - 64;
const SWIPE_THRESHOLD = BUTTON_WIDTH * 0.7;

const SlideButton = ({ onComplete, text = "Slide to Start" }) => {
  const [completed, setCompleted] = useState(false);
  const pan = useRef(new Animated.ValueXY()).current;
  const opacity = useRef(new Animated.Value(1)).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        if (completed) return;
        // Only allow horizontal movement to the right
        if (gestureState.dx > 0 && gestureState.dx <= BUTTON_WIDTH - BUTTON_HEIGHT) {
          pan.setValue({ x: gestureState.dx, y: 0 });
          // Fade out text as we slide
          const newOpacity = 1 - (gestureState.dx / SWIPE_THRESHOLD);
          opacity.setValue(Math.max(0, newOpacity));
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        if (completed) return;
        if (gestureState.dx > SWIPE_THRESHOLD) {
          // Completed
          setCompleted(true);
          Animated.timing(pan, {
            toValue: { x: BUTTON_WIDTH - BUTTON_HEIGHT, y: 0 },
            duration: 200,
            useNativeDriver: false,
          }).start(() => {
            onComplete && onComplete();
          });
        } else {
          // Reset
          Animated.spring(pan, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: false,
          }).start();
          Animated.timing(opacity, {
            toValue: 1,
            duration: 200,
            useNativeDriver: false,
          }).start();
        }
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      <View style={styles.track}>
        <Animated.Text style={[styles.text, { opacity }]}>
          {text}
        </Animated.Text>
        <Animated.View
          style={[
            styles.thumb,
            {
              transform: [{ translateX: pan.x }],
            },
          ]}
          {...panResponder.panHandlers}
        >
          <MaterialCommunityIcons 
            name="chevron-right" 
            size={32} 
            color={theme.colors.primary} 
          />
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  track: {
    width: BUTTON_WIDTH,
    height: BUTTON_HEIGHT,
    backgroundColor: theme.colors.surface,
    borderRadius: BUTTON_HEIGHT / 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.border,
    overflow: 'hidden',
  },
  thumb: {
    position: 'absolute',
    left: 0,
    width: BUTTON_HEIGHT,
    height: BUTTON_HEIGHT,
    borderRadius: BUTTON_HEIGHT / 2,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    color: theme.colors.textSecondary,
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 1,
  },
});

export default SlideButton;
