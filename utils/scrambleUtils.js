// Standard moves for scramble generation
const MOVES = ['R', 'L', 'U', 'D', 'F', 'B'];
const MODIFIERS = ['', "'", '2'];

// Generate random move
const getRandomMove = () => {
  const move = MOVES[Math.floor(Math.random() * MOVES.length)];
  const modifier = MODIFIERS[Math.floor(Math.random() * MODIFIERS.length)];
  return move + modifier;
};

// Check if two moves are on the same axis
const sameAxis = (move1, move2) => {
  const axes = { R: 0, L: 0, U: 1, D: 1, F: 2, B: 2 };
  return axes[move1[0]] === axes[move2[0]];
};

// Generate a scramble sequence
export const generateScramble = (length = 20) => {
  const scramble = [];
  let lastMove = '';
  let secondLastMove = '';

  while (scramble.length < length) {
    const move = getRandomMove();
    const baseMove = move[0];
    
    // Avoid same face moves and parallel face redundancy
    if (baseMove !== lastMove[0] && 
        !(sameAxis(move, lastMove) && baseMove === secondLastMove[0])) {
      scramble.push(move);
      secondLastMove = lastMove;
      lastMove = move;
    }
  }
  
  return scramble.join(' ');
};

// Parse scramble string to array
export const parseScramble = (scrambleStr) => {
  return scrambleStr.trim().split(/\s+/);
};
