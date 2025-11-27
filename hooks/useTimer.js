import { useState, useRef, useCallback } from 'react';

const useTimer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);
  const startTimeRef = useRef(0);

  const start = useCallback(() => {
    if (!isRunning) {
      startTimeRef.current = Date.now() - time;
      intervalRef.current = setInterval(() => {
        setTime(Date.now() - startTimeRef.current);
      }, 10);
      setIsRunning(true);
    }
  }, [isRunning, time]);

  const stop = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setIsRunning(false);
    return time;
  }, [time]);

  const reset = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setIsRunning(false);
    setTime(0);
  }, []);

  const toggle = useCallback(() => {
    if (isRunning) {
      return stop();
    } else {
      start();
      return null;
    }
  }, [isRunning, start, stop]);

  return { time, isRunning, start, stop, reset, toggle };
};

export default useTimer;
