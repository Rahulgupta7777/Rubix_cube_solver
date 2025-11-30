import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Modal, ScrollView, Alert } from 'react-native';
import { Button, Title } from 'react-native-paper';
import { 
  AppHeader, 
  ScreenContainer, 
  ContentPadding, 
  ActionCard, 
  InfoCard 
} from '../components/common';
import { CubePreview, CubeScanner, CubeNet, ColorPicker } from '../components/cube';
import { createSolvedCube, COLORS } from '../utils/cubeUtils';
import { solveCube } from '../utils/solverUtils';

const SolverScreen = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [isManualInput, setIsManualInput] = useState(false);
  const [cubeState, setCubeState] = useState(createSolvedCube());
  const [selectedColor, setSelectedColor] = useState(COLORS.WHITE);

  const handleScanCube = () => setIsScanning(true);
  const handleManualInput = () => setIsManualInput(true);
  
  const handleScanComplete = (colors) => {
    console.log('Scanned colors:', colors);
    setIsScanning(false);
    // TODO: Map scanned colors to cubeState
    Alert.alert('Scan Complete', 'Cube state updated (mock).');
  };

  const handleScanCancel = () => setIsScanning(false);

  const handleCellPress = (face, index) => {
    setCubeState(prevState => ({
      ...prevState,
      [face]: prevState[face].map((c, i) => i === index ? selectedColor : c),
    }));
  };

  const handleSolve = () => {
    const steps = solveCube(cubeState);
    if (steps) {
      // For MVP, just show the first few steps or a success message
      // Ideally navigate to a SolutionScreen
      Alert.alert('Solution Found', `Found solution with ${steps.length} moves! \n\n${steps.map(s => s.move).join(' ')}`);
      console.log('Solution:', steps);
    } else {
      Alert.alert('Error', 'Could not find a solution. Please check your cube state.');
    }
  };

  return (
    <ScreenContainer>
      <AppHeader title="Cube Solver" />
      <ScrollView>
        <ContentPadding>
          {!isManualInput ? (
            <>
              <InfoCard
                title="Scan or Input your cube to find a solution"
                description="Choose how you'd like to input your cube state to get step-by-step solving instructions."
              />
              <View style={styles.inputOptions}>
                <ActionCard
                  icon="camera"
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
            </>
          ) : (
            <View>
              <View style={styles.headerRow}>
                <Title>Manual Input</Title>
                <Button onPress={() => setIsManualInput(false)}>Cancel</Button>
              </View>
              
              <InfoCard 
                description="Select a color below and tap the cube faces to paint them." 
              />

              <ColorPicker 
                selectedColor={selectedColor} 
                onColorSelect={setSelectedColor} 
              />

              <View style={styles.netContainer}>
                <CubeNet 
                  cubeState={cubeState} 
                  onCellPress={handleCellPress}
                  cellSize={100}
                />
              </View>

              <Button 
                mode="contained" 
                onPress={handleSolve}
                style={styles.solveButton}
                icon="cube-send"
              >
                Solve Cube
              </Button>
            </View>
          )}
        </ContentPadding>
      </ScrollView>

      <Modal visible={isScanning} animationType="slide" onRequestClose={handleScanCancel}>
        <CubeScanner onScanComplete={handleScanComplete} onCancel={handleScanCancel} />
      </Modal>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  inputOptions: {
    marginBottom: 24,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  netContainer: {
    alignItems: 'center',
    marginVertical: 24,
  },
  solveButton: {
    marginTop: 16,
    marginBottom: 32,
  },
});

export default SolverScreen;
