import React, { createContext, useContext, useState, useMemo } from 'react';

const defaultSettings = {
  darkMode: true,
  soundEnabled: true,
  notifications: false,
  inspectionTime: 15,
  timerPrecision: 2,
};

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState(defaultSettings);

  const updateSetting = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const resetSettings = () => {
    setSettings(defaultSettings);
  };

  const value = useMemo(() => ({
    settings,
    updateSetting,
    resetSettings,
  }), [settings]);

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within SettingsProvider');
  }
  return context;
};

export default SettingsContext;
