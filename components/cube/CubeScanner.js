import React, { useState, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { Button, Surface } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CubeScanner = ({ onScanComplete, onCancel }) => {
  const [permission, requestPermission] = useCameraPermissions();
  const [scannedColors, setScannedColors] = useState(Array(9).fill(null));
  const cameraRef = useRef(null);

  if (!permission) {
    // Camera permissions are still loading
    return <View style={styles.container} />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.permissionContainer}>
        <Text style={styles.permissionText}>We need your permission to show the camera</Text>
        <Button mode="contained" onPress={requestPermission}>
          Grant Permission
        </Button>
        <Button mode="text" onPress={onCancel} style={styles.cancelButton}>
          Cancel
        </Button>
      </View>
    );
  }

  const handleCapture = async () => {
    if (cameraRef.current) {
      // In a real app, we would process the image here to detect colors.
      // For this MVP, we'll simulate a scan or just take a picture.
      try {
        const photo = await cameraRef.current.takePictureAsync();
        console.log('Photo taken:', photo.uri);
        // Mocking successful scan for now
        onScanComplete && onScanComplete(['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W']); 
      } catch (error) {
        console.error("Failed to take picture:", error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} ref={cameraRef} facing="back">
        <View style={styles.overlay}>
          <View style={styles.gridContainer}>
            {/* 3x3 Grid Overlay */}
            {Array(9).fill(0).map((_, i) => (
              <View key={i} style={styles.gridCell} />
            ))}
          </View>
          <View style={styles.controls}>
            <TouchableOpacity onPress={onCancel} style={styles.controlButton}>
              <MaterialCommunityIcons name="close" size={32} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCapture} style={styles.captureButton}>
              <View style={styles.captureInner} />
            </TouchableOpacity>
            <View style={styles.controlButton} /> 
          </View>
        </View>
      </CameraView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  permissionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  permissionText: {
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  cancelButton: {
    marginTop: 10,
  },
  camera: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridContainer: {
    width: 300,
    height: 300,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.8)',
    borderRadius: 4,
    overflow: 'hidden',
  },
  gridCell: {
    width: '33.33%',
    height: '33.33%',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  controls: {
    position: 'absolute',
    bottom: 40,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  controlButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255,255,255,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureInner: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#ccc',
  },
});

export default CubeScanner;
