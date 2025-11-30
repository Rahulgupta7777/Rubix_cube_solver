import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { View, StyleSheet } from 'react-native';
import * as THREE from 'three';

// Map face names to vectors/indices
const FACE_MAP = {
  U: { axis: 'y', dir: 1 },
  D: { axis: 'y', dir: -1 },
  F: { axis: 'z', dir: 1 },
  B: { axis: 'z', dir: -1 },
  R: { axis: 'x', dir: 1 },
  L: { axis: 'x', dir: -1 },
};

const Cubie = ({ position, colors }) => {
  // colors is an array of 6 colors: [Right, Left, Top, Bottom, Front, Back]
  // corresponding to x+, x-, y+, y-, z+, z-
  
  return (
    <mesh position={position}>
      <boxGeometry args={[0.95, 0.95, 0.95]} />
      {colors.map((color, i) => (
        <meshStandardMaterial key={i} attach={`material-${i}`} color={color} />
      ))}
    </mesh>
  );
};

const Cube3D = ({ cubeState }) => {
  // cubeState has U, D, F, B, L, R arrays of 9 colors
  
  const cubies = useMemo(() => {
    const cubes = [];
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          // Determine colors for this cubie
          // Default black (internal faces)
          const cubieColors = ['#000000', '#000000', '#000000', '#000000', '#000000', '#000000'];
          
          // Right (x=1)
          if (x === 1) {
            // Map to R face index
            // R face: 0 is top-front (y=1, z=1)? Need to verify standard mapping
            // Let's assume standard row-major from top-left
            // For R face:
            // 0 (top-left) -> y=1, z=1
            // 2 (top-right) -> y=1, z=-1
            // 8 (bottom-right) -> y=-1, z=-1
            // index = (1 - y) * 3 + (1 - z) ?
            // (1 - 1)*3 + (1 - 1) = 0. Correct.
            // (1 - 1)*3 + (1 - (-1)) = 2. Correct.
            // (1 - (-1))*3 + (1 - (-1)) = 6 + 2 = 8. Correct.
            const idx = (1 - y) * 3 + (1 - z); // Check this logic carefully
            // Actually, let's look at a standard net.
            // R face is usually to the right of F.
            // If F is front, R is right.
            // Top-left of R is adjacent to Top-right of F.
            // So y=1, z=1 is top-left of R.
            // y=1, z=-1 is top-right of R.
            // So z goes 1 -> -1 as col goes 0 -> 2.
            // y goes 1 -> -1 as row goes 0 -> 2.
            // row = 1 - y. col = (1 - z) / 1? No, z=1 is col 0, z=-1 is col 2.
            // col = (1 - z). Wait, 1 -> 0, 0 -> 1, -1 -> 2. Yes.
            const row = 1 - y;
            const col = 1 - z;
            const index = row * 3 + col;
            cubieColors[0] = cubeState.R[index];
          }
          
          // Left (x=-1)
          if (x === -1) {
            // L face
            // Top-left (0) is y=1, z=-1 (back-top)
            // Top-right (2) is y=1, z=1 (front-top)
            // row = 1 - y.
            // col: z=-1 -> 0, z=1 -> 2.
            // col = z + 1.
            const row = 1 - y;
            const col = z + 1;
            const index = row * 3 + col;
            cubieColors[1] = cubeState.L[index];
          }
          
          // Top (y=1) -> U face
          if (y === 1) {
            // U face
            // Top-left (0) is x=-1, z=-1 (back-left)
            // Top-right (2) is x=1, z=-1 (back-right)
            // Bottom-left (6) is x=-1, z=1 (front-left)
            // row: z=-1 -> 0, z=1 -> 2. row = z + 1.
            // col: x=-1 -> 0, x=1 -> 2. col = x + 1.
            const row = z + 1;
            const col = x + 1;
            const index = row * 3 + col;
            cubieColors[2] = cubeState.U[index];
          }
          
          // Bottom (y=-1) -> D face
          if (y === -1) {
            // D face
            // Top-left (0) is x=-1, z=1 (front-left)
            // Top-right (2) is x=1, z=1 (front-right)
            // row: z=1 -> 0, z=-1 -> 2. row = 1 - z.
            // col: x=-1 -> 0, x=1 -> 2. col = x + 1.
            const row = 1 - z;
            const col = x + 1;
            const index = row * 3 + col;
            cubieColors[3] = cubeState.D[index];
          }
          
          // Front (z=1) -> F face
          if (z === 1) {
            // F face
            // Top-left (0) is x=-1, y=1
            // Top-right (2) is x=1, y=1
            // row = 1 - y.
            // col = x + 1.
            const row = 1 - y;
            const col = x + 1;
            const index = row * 3 + col;
            cubieColors[4] = cubeState.F[index];
          }
          
          // Back (z=-1) -> B face
          if (z === -1) {
            // B face
            // Top-left (0) is x=1, y=1 (looking from back? No, standard net usually unfolds)
            // If we look at back face from back:
            // Top-left is x=1 (which is right from front, but left from back), y=1.
            // Let's assume standard unfolding where B is to the right of R (or left of L).
            // Usually B is "behind".
            // Let's assume:
            // row = 1 - y.
            // col: x=1 -> 0, x=-1 -> 2. col = 1 - x.
            const row = 1 - y;
            const col = 1 - x;
            const index = row * 3 + col;
            cubieColors[5] = cubeState.B[index];
          }

          cubes.push(
            <Cubie 
              key={`${x}-${y}-${z}`} 
              position={[x, y, z]} 
              colors={cubieColors} 
            />
          );
        }
      }
    }
    return cubes;
  }, [cubeState]);

  return (
    <View style={styles.container}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[4, 4, 4]} />
        <OrbitControls enablePan={false} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <group>
          {cubies}
        </group>
      </Canvas>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 300,
  },
});

export default Cube3D;
