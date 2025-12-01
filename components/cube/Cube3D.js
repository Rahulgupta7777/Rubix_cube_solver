import React, { useEffect, useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import { GLView } from 'expo-gl';
import { Renderer } from 'expo-three';
import * as THREE from 'three';
import { createCubies } from '../../utils/threeUtils';

const Cube3D = ({ cubeState }) => {
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const cubeGroupRef = useRef(null);
  const animationRef = useRef(null);

  const onContextCreate = async (gl) => {
    const { drawingBufferWidth: width, drawingBufferHeight: height } = gl;

    const renderer = new Renderer({ gl });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 1);
    rendererRef.current = renderer;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(4, 4, 4);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1.0);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0xffffff, 0.5);
    pointLight2.position.set(-10, -10, -10);
    scene.add(pointLight2);

    createCubies(scene, cubeState, cubeGroupRef);

    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      if (cubeGroupRef.current) {
        cubeGroupRef.current.rotation.y += 0.005;
        cubeGroupRef.current.rotation.x += 0.002;
      }
      renderer.render(scene, camera);
      gl.endFrameEXP();
    };
    animate();
  };

  useEffect(() => {
    if (sceneRef.current && cubeState) {
      createCubies(sceneRef.current, cubeState, cubeGroupRef);
    }
  }, [cubeState]);

  useEffect(() => {
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      if (rendererRef.current) rendererRef.current.dispose();
    };
  }, []);

  return (
    <View style={styles.container}>
      <GLView style={styles.glView} onContextCreate={onContextCreate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 300,
    backgroundColor: '#000000',
    borderRadius: 12,
    overflow: 'hidden',
  },
  glView: {
    flex: 1,
  },
});

export default Cube3D;
