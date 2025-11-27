// Beginner method tutorial content
export const beginnerMethodSteps = [
  {
    id: 'step-1',
    title: 'The White Cross',
    description: 'First, we create a cross on the white face.',
    tips: [
      'Look for white edge pieces',
      'Match edge colors with center pieces',
      'Use intuitive moves at first',
    ],
    algorithms: [],
  },
  {
    id: 'step-2',
    title: 'White Corners',
    description: 'Insert the four white corner pieces.',
    tips: [
      'Find a white corner in the top layer',
      'Position it above its spot',
      'Use the algorithm to insert',
    ],
    algorithms: ["R U R' U'"],
  },
  {
    id: 'step-3',
    title: 'Second Layer Edges',
    description: 'Insert the four edge pieces in the middle layer.',
    tips: [
      'Find an edge without yellow',
      'Match the front color with the center',
      'Determine left or right insertion',
    ],
    algorithms: [
      "U R U' R' U' F' U F",
      "U' L' U L U F U' F'",
    ],
  },
  {
    id: 'step-4',
    title: 'Yellow Cross',
    description: 'Orient the yellow edges to form a cross.',
    tips: [
      'Hold yellow face on top',
      'Identify the pattern (dot, L, line)',
      'Repeat algorithm as needed',
    ],
    algorithms: ["F R U R' U' F'"],
  },
  {
    id: 'step-5',
    title: 'Yellow Edges',
    description: 'Position the yellow edges correctly.',
    tips: [
      'Look for edges that match centers',
      'Position matching edges to the back',
      'Apply the algorithm',
    ],
    algorithms: ["R U R' U R U2 R' U"],
  },
  {
    id: 'step-6',
    title: 'Yellow Corners Position',
    description: 'Position the yellow corners correctly.',
    tips: [
      'Find corners in correct position',
      'Hold correct corner at front-right',
      'Repeat until all positioned',
    ],
    algorithms: ["U R U' L' U R' U' L"],
  },
  {
    id: 'step-7',
    title: 'Yellow Corners Orient',
    description: 'Orient the final corners to solve the cube.',
    tips: [
      'Keep yellow on top throughout',
      'Apply until corner is yellow',
      'Rotate U to next unsolved corner',
    ],
    algorithms: ["R U R' U'"],
  },
];

export default beginnerMethodSteps;
