import { useState, useCallback, useMemo } from 'react';
import { allAlgorithms } from '../data';

const useFlashcards = (initialCards = null) => {
  const [cards] = useState(initialCards || allAlgorithms);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [results, setResults] = useState({ correct: 0, incorrect: 0 });

  const currentCard = useMemo(() => 
    cards[currentIndex] || null, [cards, currentIndex]);

  const remaining = cards.length - currentIndex - 1;

  const handleCorrect = useCallback(() => {
    setResults(prev => ({ ...prev, correct: prev.correct + 1 }));
    setCurrentIndex(prev => Math.min(prev + 1, cards.length - 1));
  }, [cards.length]);

  const handleIncorrect = useCallback(() => {
    setResults(prev => ({ ...prev, incorrect: prev.incorrect + 1 }));
    setCurrentIndex(prev => Math.min(prev + 1, cards.length - 1));
  }, [cards.length]);

  const reset = useCallback(() => {
    setCurrentIndex(0);
    setResults({ correct: 0, incorrect: 0 });
  }, []);

  return {
    currentCard,
    remaining,
    results,
    handleCorrect,
    handleIncorrect,
    reset,
    isComplete: currentIndex >= cards.length - 1,
  };
};

export default useFlashcards;
