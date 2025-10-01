import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar, Card, Title, Paragraph, Button, Surface, Text } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const SolverScreen = () => {
  const [isScanning, setIsScanning] = useState(false);

  const handleScanCube = () => {
    console.log('Scan Cube pressed');
    setIsScanning(!isScanning);
  };

  const handleManualInput = () => {
    console.log('Manual Input pressed');
  };

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Cube Solver" />
      </Appbar.Header>
      
      <View style={styles.content}>
        <Surface style={styles.guidanceCard} elevation={2}>
          <Title style={styles.guidanceTitle}>Scan or Input your cube to find a solution</Title>
          <Paragraph style={styles.guidanceText}>
            Choose how you'd like to input your cube state to get step-by-step solving instructions.
          </Paragraph>
        </Surface>

        <View style={styles.inputOptions}>
          <Card style={styles.optionCard} onPress={handleScanCube}>
            <Card.Content style={styles.cardContent}>
              <MaterialCommunityIcons 
                name={isScanning ? "camera-off" : "camera"} 
                size={48} 
                color="#ffffff" 
              />
              <Title style={styles.cardTitle}>Scan Cube</Title>
              <Paragraph>Use your camera to detect cube colors</Paragraph>
              {isScanning && (
                <Text style={styles.statusText}>Scanning mode active</Text>
              )}
            </Card.Content>
          </Card>

          <Card style={styles.optionCard} onPress={handleManualInput}>
            <Card.Content style={styles.cardContent}>
              <MaterialCommunityIcons name="gesture-tap" size={48} color="#6200ea" />
              <Title style={styles.cardTitle}>Manual Input</Title>
              <Paragraph>Tap to input colors manually</Paragraph>
            </Card.Content>
          </Card>
        </View>

        <Surface style={styles.cubePreview} elevation={1}>
          <Text style={styles.previewText}>Cube Preview</Text>
          <MaterialCommunityIcons name="cube-outline" size={80} color="#ccc" />
        </Surface>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  guidanceCard: {
    padding: 20,
    marginBottom: 24,
    borderRadius: 8,
    backgroundColor: '#1a1a1a',
  },
  guidanceTitle: {
    textAlign: 'center',
    marginBottom: 8,
    color: '#ffffff',
  },
  guidanceText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#cccccc',
  },
  inputOptions: {
    marginBottom: 24,
  },
  optionCard: {
    marginBottom: 16,
    borderRadius: 12,
    backgroundColor: '#1a1a1a',
  },
  cardContent: {
    alignItems: 'center',
    padding: 20,
  },
  cardTitle: {
    marginTop: 12,
    marginBottom: 8,
    textAlign: 'center',
    color: '#ffffff',
  },
  statusText: {
    color: '#4caf50',
    fontWeight: 'bold',
    marginTop: 8,
  },
  cubePreview: {
    padding: 20,
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#1a1a1a',
  },
  previewText: {
    marginBottom: 12,
    fontSize: 16,
    color: '#cccccc',
  },
});

export default SolverScreen;
