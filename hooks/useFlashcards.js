import { useState, useCallback, useMemo, useEffect } from 'react';
import { allAlgorithms } from '../data';
import useLocalStorage from './useLocalStorage';
import { calculateNextReview, initializeCard } from '../utils/spacedRepetition';

const useFlashcards = () => {
  // Store progress for each algorithm by ID
  const [progress, setProgress] = useLocalStorage('flashcard_progress', {});
  
  // Filter due cards
  const dueCards = useMemo(() => {
    const now = new Date();
    return allAlgorithms.filter(alg => {
      const card = progress[alg.id] || initializeCard();
      return new Date(card.nextReviewDate) <= now;
    });
  }, [progress]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [sessionResults, setSessionResults] = useState({ correct: 0, incorrect: 0 });
  const [isSessionComplete, setIsSessionComplete] = useState(false);

  const currentCard = useMemo(() => 
    dueCards[currentIndex] || null, [dueCards, currentIndex]);

  const remaining = dueCards.length - currentIndex;

  const handleResponse = useCallback((quality) => {
    if (!currentCard) return;

    const cardId = currentCard.id;
    const currentProgress = progress[cardId] || initializeCard();
    
    // Calculate new stats
    const newStats = calculateNextReview(
      quality, 
      currentProgress.repetitions, 
      currentProgress.interval, 
      currentProgress.easeFactor
    );

    // Update progress
    setProgress(prev => ({
      ...prev,
      [cardId]: newStats,
    }));

    // Update session stats
    if (quality >= 3) {
      setSessionResults(prev => ({ ...prev, correct: prev.correct + 1 }));
    } else {
      setSessionResults(prev => ({ ...prev, incorrect: prev.incorrect + 1 }));
    }

    // Move to next card
    if (currentIndex < dueCards.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setIsSessionComplete(true);
    }
  }, [currentCard, progress, setProgress, currentIndex, dueCards.length]);

  const handleCorrect = () => handleResponse(4); // Good
  const handleIncorrect = () => handleResponse(1); // Hard/Fail

  const resetSession = useCallback(() => {
    setCurrentIndex(0);
    setSessionResults({ correct: 0, incorrect: 0 });
    setIsSessionComplete(false);
  }, []);

  return {
    currentCard,
    remaining,
    results: sessionResults,
    handleCorrect,
    handleIncorrect,
    reset: resetSession,
    isComplete: isSessionComplete || dueCards.length === 0,
    totalDue: dueCards.length,
  };
};

export default useFlashcards;
