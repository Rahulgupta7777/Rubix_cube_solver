// Color constants for the cube
export const COLORS = {
  WHITE: '#ffffff',
  YELLOW: '#ffff00',
  BLUE: '#0000ff',
  GREEN: '#00ff00',
  RED: '#ff0000',
  ORANGE: '#ff8000',
  EMPTY: '#333333',
};

// Face names
export const FACES = ['U', 'D', 'F', 'B', 'L', 'R'];

// Create a solved cube state
export const createSolvedCube = () => ({
  U: Array(9).fill(COLORS.WHITE),
  D: Array(9).fill(COLORS.YELLOW),
  F: Array(9).fill(COLORS.GREEN),
  B: Array(9).fill(COLORS.BLUE),
  L: Array(9).fill(COLORS.ORANGE),
  R: Array(9).fill(COLORS.RED),
});

// Validate cube state
export const isValidCubeState = (cube) => {
  const colorCounts = {};
  Object.values(cube).flat().forEach(color => {
    colorCounts[color] = (colorCounts[color] || 0) + 1;
  });
  return Object.values(colorCounts).every(count => count === 9);
};

// Get color name from hex
export const getColorName = (hex) => {
  const colorMap = {
    [COLORS.WHITE]: 'White',
    [COLORS.YELLOW]: 'Yellow',
    [COLORS.BLUE]: 'Blue',
    [COLORS.GREEN]: 'Green',
    [COLORS.RED]: 'Red',
    [COLORS.ORANGE]: 'Orange',
  };
  return colorMap[hex] || 'Unknown';
};
