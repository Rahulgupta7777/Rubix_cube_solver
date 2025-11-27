import ollAlgorithms from './ollAlgorithms';
import pllAlgorithms from './pllAlgorithms';
import f2lAlgorithms from './f2lAlgorithms';
import tutorialTopics from './tutorials';

// Combine all algorithms
export const allAlgorithms = [
  ...ollAlgorithms,
  ...pllAlgorithms,
  ...f2lAlgorithms,
];

// Get algorithms by category
export const getAlgorithmsByCategory = (category) => {
  return allAlgorithms.filter(alg => alg.category === category);
};

// Get algorithm by ID
export const getAlgorithmById = (id) => {
  return allAlgorithms.find(alg => alg.id === id);
};

export {
  ollAlgorithms,
  pllAlgorithms,
  f2lAlgorithms,
  tutorialTopics,
};
