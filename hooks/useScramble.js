import { useState, useCallback } from 'react';
import { generateScramble } from '../utils/scrambleUtils';

const useScramble = () => {
  const [scramble, setScramble] = useState(generateScramble());

  const newScramble = useCallback((length = 20) => {
    const newScr = generateScramble(length);
    setScramble(newScr);
    return newScr;
  }, []);

  return { scramble, newScramble };
};

export default useScramble;
