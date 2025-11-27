// Simple cube solver - Beginner's method steps
// This provides solving hints rather than optimal solutions

export const getSolveSteps = (cubeState) => {
  return [
    { step: 1, name: 'White Cross', description: 'Form a cross on the white face' },
    { step: 2, name: 'White Corners', description: 'Complete the first layer' },
    { step: 3, name: 'Second Layer', description: 'Insert edge pieces' },
    { step: 4, name: 'Yellow Cross', description: 'Orient yellow edges' },
    { step: 5, name: 'Yellow Edges', description: 'Position yellow edges' },
    { step: 6, name: 'Yellow Corners Position', description: 'Position corners' },
    { step: 7, name: 'Yellow Corners Orient', description: 'Orient final corners' },
  ];
};

// Common solving algorithms
export const solverAlgorithms = {
  insertEdgeRight: "U R U' R' U' F' U F",
  insertEdgeLeft: "U' L' U L U F U' F'",
  yellowCross: "F R U R' U' F'",
  suneAlgorithm: "R U R' U R U2 R'",
  antiSune: "R U2 R' U' R U' R'",
  tPermutation: "R U R' U' R' F R2 U' R' U' R U R' F'",
  jPermutation: "R U R' F' R U R' U' R' F R2 U' R'",
};

export default { getSolveSteps, solverAlgorithms };
