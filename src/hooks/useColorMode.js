import React, { createContext, useContext, useEffect, useState } from 'react';

const STORAGE_KEY = 'color-mode';

const ColorModeContext = createContext(null);

function getInitialColorMode() {
  if (typeof window === 'undefined') return 'light';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === 'dark' || stored === 'light' ? stored : 'light';
}

export const ColorModeProvider = ({ children }) => {
  const [colorMode, setColorMode] = useState(getInitialColorMode);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', colorMode === 'dark');
    window.localStorage.setItem(STORAGE_KEY, colorMode);
  }, [colorMode]);

  const toggleColorMode = () => setColorMode(prev => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <ColorModeContext.Provider value={{ colorMode, setColorMode, toggleColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};

export const useColorMode = () => {
  const ctx = useContext(ColorModeContext);
  if (!ctx) {
    throw new Error('useColorMode must be used within a ColorModeProvider');
  }
  return ctx;
};
