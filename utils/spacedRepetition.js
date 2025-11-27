// Spaced repetition algorithm (SM-2 based)
// For flashcard learning optimization

export const calculateNextReview = (quality, repetitions, interval, easeFactor) => {
  // quality: 0-5, where 5 = perfect response
  // Returns: { repetitions, interval, easeFactor, nextReviewDate }
  
  let newInterval;
  let newRepetitions;
  let newEaseFactor = easeFactor;

  if (quality >= 3) {
    // Correct response
    if (repetitions === 0) {
      newInterval = 1;
    } else if (repetitions === 1) {
      newInterval = 6;
    } else {
      newInterval = Math.round(interval * easeFactor);
    }
    newRepetitions = repetitions + 1;
  } else {
    // Incorrect response - reset
    newRepetitions = 0;
    newInterval = 1;
  }

  // Update ease factor
  newEaseFactor = easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  newEaseFactor = Math.max(1.3, newEaseFactor);

  const nextReviewDate = new Date();
  nextReviewDate.setDate(nextReviewDate.getDate() + newInterval);

  return {
    repetitions: newRepetitions,
    interval: newInterval,
    easeFactor: newEaseFactor,
    nextReviewDate,
  };
};

export const initializeCard = () => ({
  repetitions: 0,
  interval: 0,
  easeFactor: 2.5,
  nextReviewDate: new Date(),
});

export default { calculateNextReview, initializeCard };
