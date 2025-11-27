import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { 
  AppHeader, 
  ScreenContainer, 
  ContentPadding, 
  ActionCard, 
  InfoCard 
} from '../components/common';
import { CubePreview } from '../components/cube';

const SolverScreen = () => {
  const [isScanning, setIsScanning] = useState(false);

  const handleScanCube = () => setIsScanning(!isScanning);
  const handleManualInput = () => console.log('Manual Input pressed');

  return (
    <ScreenContainer>
      <AppHeader title="Cube Solver" />
      <ContentPadding>
        <InfoCard
          title="Scan or Input your cube to find a solution"
          description="Choose how you'd like to input your cube state to get step-by-step solving instructions."
        />
        <View style={styles.inputOptions}>
          <ActionCard
            icon={isScanning ? 'camera-off' : 'camera'}
            title="Scan Cube"
            description="Use your camera to detect cube colors"
            onPress={handleScanCube}
          />
          <ActionCard
            icon="gesture-tap"
            title="Manual Input"
            description="Tap to input colors manually"
            onPress={handleManualInput}
            iconColor="#6200ea"
          />
        </View>
        <CubePreview title="Cube Preview" />
      </ContentPadding>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  inputOptions: {
    marginBottom: 24,
  },
});

export default SolverScreen;
