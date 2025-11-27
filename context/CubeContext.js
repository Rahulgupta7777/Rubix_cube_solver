import React, { createContext, useContext, useState, useMemo } from 'react';
import { createSolvedCube } from '../utils/cubeUtils';

const CubeContext = createContext();

export const CubeProvider = ({ children }) => {
  const [cubeState, setCubeState] = useState(createSolvedCube());
  const [solution, setSolution] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);

  const resetCube = () => {
    setCubeState(createSolvedCube());
    setSolution([]);
    setCurrentStep(0);
  };

  const nextStep = () => {
    if (currentStep < solution.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const value = useMemo(() => ({
    cubeState,
    setCubeState,
    solution,
    setSolution,
    currentStep,
    setCurrentStep,
    resetCube,
    nextStep,
    prevStep,
  }), [cubeState, solution, currentStep]);

  return (
    <CubeContext.Provider value={value}>
      {children}
    </CubeContext.Provider>
  );
};

export const useCube = () => {
  const context = useContext(CubeContext);
  if (!context) {
    throw new Error('useCube must be used within CubeProvider');
  }
  return context;
};

export default CubeContext;
