import Cube from 'cubejs';
import 'cubejs/lib/solve.js';
import { COLORS } from './cubeUtils';

// Initialize cubejs (required for the solver to work)
Cube.initSolver();

// Map internal colors to solver face characters
// Standard order: U, R, F, D, L, B
const COLOR_TO_FACE = {
  [COLORS.WHITE]: 'U',
  [COLORS.RED]: 'R',
  [COLORS.GREEN]: 'F',
  [COLORS.YELLOW]: 'D',
  [COLORS.ORANGE]: 'L',
  [COLORS.BLUE]: 'B',
};

export const cubeStateToString = (cubeState) => {
  // cubejs expects a specific 54-character string format
  // Order: U1-U9, R1-R9, F1-F9, D1-D9, L1-L9, B1-B9
  const faces = ['U', 'R', 'F', 'D', 'L', 'B'];
  let stateString = '';
  
  faces.forEach(face => {
    cubeState[face].forEach(color => {
      stateString += COLOR_TO_FACE[color] || 'U'; // Default to U if error
    });
  });
  
  return stateString;
};

export const solveCube = (cubeState) => {
  try {
    const stateString = cubeStateToString(cubeState);
    const cube = Cube.fromString(stateString);
    const solution = cube.solve();
    
    if (!solution || solution.trim() === '') {
      // Cube is already solved
      return [{ step: 1, move: 'Solved!', description: 'Cube is already solved' }];
    }
    
    // solution is a string like "R U R' U'"
    return solution.trim().split(' ').filter(move => move).map((move, index) => ({
      step: index + 1,
      move: move,
      description: getMoveDescription(move),
    }));
  } catch (error) {
    console.error('Solver error:', error);
    return null;
  }
};

const getMoveDescription = (move) => {
  const descriptions = {
    "R": "Turn Right Face Clockwise",
    "R'": "Turn Right Face Counter-Clockwise",
    "R2": "Turn Right Face 180 degrees",
    "L": "Turn Left Face Clockwise",
    "L'": "Turn Left Face Counter-Clockwise",
    "L2": "Turn Left Face 180 degrees",
    "U": "Turn Top Face Clockwise",
    "U'": "Turn Top Face Counter-Clockwise",
    "U2": "Turn Top Face 180 degrees",
    "D": "Turn Bottom Face Clockwise",
    "D'": "Turn Bottom Face Counter-Clockwise",
    "D2": "Turn Bottom Face 180 degrees",
    "F": "Turn Front Face Clockwise",
    "F'": "Turn Front Face Counter-Clockwise",
    "F2": "Turn Front Face 180 degrees",
    "B": "Turn Back Face Clockwise",
    "B'": "Turn Back Face Counter-Clockwise",
    "B2": "Turn Back Face 180 degrees",
  };
  return descriptions[move] || `Perform move ${move}`;
};

export const getSolveSteps = (cubeState) => {
  // Wrapper for backward compatibility or more complex logic
  return solveCube(cubeState);
};

export const solverAlgorithms = {
  insertEdgeRight: "U R U' R' U' F' U F",
  insertEdgeLeft: "U' L' U L U F U' F'",
  yellowCross: "F R U R' U' F'",
  suneAlgorithm: "R U R' U R U2 R'",
  antiSune: "R U2 R' U' R U' R'",
  tPermutation: "R U R' U' R' F R2 U' R' U' R U R' F'",
  jPermutation: "R U R' F' R U R' U' R' F R2 U' R'",
};

export default { getSolveSteps, solveCube, solverAlgorithms };
