// Format time in seconds to mm:ss.ms format
export const formatTime = (milliseconds) => {
  const totalSeconds = milliseconds / 1000;
  const mins = Math.floor(totalSeconds / 60);
  const secs = (totalSeconds % 60).toFixed(2);
  
  if (mins > 0) {
    return `${mins}:${secs.padStart(5, '0')}`;
  }
  return secs;
};

// Format time for display
export const formatTimeDisplay = (ms) => {
  if (ms < 1000) return '0.00';
  return (ms / 1000).toFixed(2);
};

// Calculate average of times
export const calculateAverage = (times) => {
  if (times.length === 0) return 0;
  const sum = times.reduce((acc, t) => acc + t, 0);
  return sum / times.length;
};

// Calculate Ao5 (Average of 5, removing best and worst)
export const calculateAo5 = (times) => {
  if (times.length < 5) return null;
  const last5 = times.slice(-5).sort((a, b) => a - b);
  const middle3 = last5.slice(1, 4);
  return calculateAverage(middle3);
};

// Calculate Ao12
export const calculateAo12 = (times) => {
  if (times.length < 12) return null;
  const last12 = times.slice(-12).sort((a, b) => a - b);
  const middle10 = last12.slice(1, 11);
  return calculateAverage(middle10);
};
