import React, { useEffect, useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import { GLView } from 'expo-gl';
import { Renderer } from 'expo-three';
import * as THREE from 'three';

const Cube3D = ({ cubeState }) => {
  const glRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const cubeGroupRef = useRef(null);
  const animationRef = useRef(null);

  const createCubies = (scene, state) => {
    // Remove existing cubes
    if (cubeGroupRef.current) {
      scene.remove(cubeGroupRef.current);
    }

    const group = new THREE.Group();
    const size = 0.95;
    const gap = 1;

    // Create 27 cubies (3x3x3)
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          const geometry = new THREE.BoxGeometry(size, size, size);
          
          // Create materials for each face: +x, -x, +y, -y, +z, -z
          // In THREE.js, box faces are: right, left, top, bottom, front, back
          const materials = [
            new THREE.MeshStandardMaterial({ color: '#000000' }), // +x (right)
            new THREE.MeshStandardMaterial({ color: '#000000' }), // -x (left)
            new THREE.MeshStandardMaterial({ color: '#000000' }), // +y (top)
            new THREE.MeshStandardMaterial({ color: '#000000' }), // -y (bottom)
            new THREE.MeshStandardMaterial({ color: '#000000' }), // +z (front)
            new THREE.MeshStandardMaterial({ color: '#000000' }), // -z (back)
          ];

          // Apply colors based on position
          // Right face (R): x = 1
          if (x === 1) {
            const row = 1 - y;
            const col = 1 - z;
            const index = row * 3 + col;
            materials[0].color.setStyle(state.R[index]);
          }

          // Left face (L): x = -1
          if (x === -1) {
            const row = 1 - y;
            const col = z + 1;
            const index = row * 3 + col;
            materials[1].color.setStyle(state.L[index]);
          }

          // Top face (U): y = 1
          if (y === 1) {
            const row = 1 - z;
            const col = x + 1;
            const index = row * 3 + col;
            materials[2].color.setStyle(state.U[index]);
          }

          // Bottom face (D): y = -1
          if (y === -1) {
            const row = z + 1;
            const col = x + 1;
            const index = row * 3 + col;
            materials[3].color.setStyle(state.D[index]);
          }

          // Front face (F): z = 1
          if (z === 1) {
            const row = 1 - y;
            const col = x + 1;
            const index = row * 3 + col;
            materials[4].color.setStyle(state.F[index]);
          }

          // Back face (B): z = -1
          if (z === -1) {
            const row = 1 - y;
            const col = 1 - x;
            const index = row * 3 + col;
            materials[5].color.setStyle(state.B[index]);
          }

          const cubie = new THREE.Mesh(geometry, materials);
          cubie.position.set(x * gap, y * gap, z * gap);
          group.add(cubie);
        }
      }
    }

    scene.add(group);
    cubeGroupRef.current = group;
  };

  const onContextCreate = async (gl) => {
    glRef.current = gl;
    
    const { drawingBufferWidth: width, drawingBufferHeight: height } = gl;

    // Create renderer
    const renderer = new Renderer({ gl });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 1);
    rendererRef.current = renderer;

    // Create scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Create camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(4, 4, 4);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 0.8);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    // Create cubies
    createCubies(scene, cubeState);

    // Animation loop
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);

      // Rotate the cube group slowly
      if (cubeGroupRef.current) {
        cubeGroupRef.current.rotation.y += 0.005;
        cubeGroupRef.current.rotation.x += 0.002;
      }

      renderer.render(scene, camera);
      gl.endFrameEXP();
    };
    animate();
  };

  // Update cubies when cubeState changes
  useEffect(() => {
    if (sceneRef.current && cubeState) {
      createCubies(sceneRef.current, cubeState);
    }
  }, [cubeState]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, []);

  return (
    <View style={styles.container}>
      <GLView 
        style={styles.glView}
        onContextCreate={onContextCreate}
      />
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
