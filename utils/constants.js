// App constants
export const APP_NAME = 'Rubix Cube Solver & Trainer';
export const APP_VERSION = '1.0.0';

// Timer settings
export const TIMER_SETTINGS = {
  INSPECTION_TIME: 15, // seconds
  UPDATE_INTERVAL: 10, // milliseconds
};

// Cube settings
export const CUBE_SETTINGS = {
  DEFAULT_SIZE: 3,
  FACES: ['U', 'D', 'F', 'B', 'L', 'R'],
  FACE_NAMES: {
    U: 'Up (White)',
    D: 'Down (Yellow)',
    F: 'Front (Green)',
    B: 'Back (Blue)',
    L: 'Left (Orange)',
    R: 'Right (Red)',
  },
};

// Algorithm categories
export const CATEGORIES = ['OLL', 'PLL', 'F2L'];

// Difficulty levels
export const DIFFICULTY_LEVELS = {
  BEGINNER: 'beginner',
  INTERMEDIATE: 'intermediate',
  ADVANCED: 'advanced',
};

export default {
  APP_NAME,
  APP_VERSION,
  TIMER_SETTINGS,
  CUBE_SETTINGS,
  CATEGORIES,
  DIFFICULTY_LEVELS,
};
