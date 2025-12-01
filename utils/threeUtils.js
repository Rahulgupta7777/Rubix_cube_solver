import * as THREE from 'three';

export const createCubies = (scene, state, cubeGroupRef) => {
  if (cubeGroupRef.current) {
    scene.remove(cubeGroupRef.current);
  }

  const group = new THREE.Group();
  const size = 0.95;
  const gap = 1;

  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      for (let z = -1; z <= 1; z++) {
        const geometry = new THREE.BoxGeometry(size, size, size);
        
        const materials = [
          new THREE.MeshStandardMaterial({ color: '#000000', roughness: 0.2, metalness: 0.1 }), // +x
          new THREE.MeshStandardMaterial({ color: '#000000', roughness: 0.2, metalness: 0.1 }), // -x
          new THREE.MeshStandardMaterial({ color: '#000000', roughness: 0.2, metalness: 0.1 }), // +y
          new THREE.MeshStandardMaterial({ color: '#000000', roughness: 0.2, metalness: 0.1 }), // -y
          new THREE.MeshStandardMaterial({ color: '#000000', roughness: 0.2, metalness: 0.1 }), // +z
          new THREE.MeshStandardMaterial({ color: '#000000', roughness: 0.2, metalness: 0.1 }), // -z
        ];

        if (x === 1) applyFaceColor(materials[0], state.R, 1 - y, 1 - z);
        if (x === -1) applyFaceColor(materials[1], state.L, 1 - y, z + 1);
        if (y === 1) applyFaceColor(materials[2], state.U, 1 - z, x + 1);
        if (y === -1) applyFaceColor(materials[3], state.D, z + 1, x + 1);
        if (z === 1) applyFaceColor(materials[4], state.F, 1 - y, x + 1);
        if (z === -1) applyFaceColor(materials[5], state.B, 1 - y, 1 - x);

        const cubie = new THREE.Mesh(geometry, materials);
        cubie.position.set(x * gap, y * gap, z * gap);
        group.add(cubie);
      }
    }
  }

  scene.add(group);
  cubeGroupRef.current = group;
};

const applyFaceColor = (material, faceState, row, col) => {
  const index = row * 3 + col;
  material.color.setStyle(faceState[index]);
};

export const setupScene = (gl, width, height) => {
  const renderer = new THREE.WebGLRenderer({ canvas: { width, height, style: {}, addEventListener: () => {}, removeEventListener: () => {}, clientWidth: width, clientHeight: height }, context: gl });
  renderer.setSize(width, height);
  renderer.setClearColor(0x000000, 1);

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
  camera.position.set(4, 4, 4);
  camera.lookAt(0, 0, 0);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
  scene.add(ambientLight);

  const pointLight = new THREE.PointLight(0xffffff, 1.0);
  pointLight.position.set(10, 10, 10);
  scene.add(pointLight);

  const pointLight2 = new THREE.PointLight(0xffffff, 0.5);
  pointLight2.position.set(-10, -10, -10);
  scene.add(pointLight2);

  return { renderer, scene, camera };
};
