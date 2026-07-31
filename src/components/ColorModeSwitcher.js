import React from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';
import { useColorMode } from '../hooks/useColorMode';

export const ColorModeSwitcher = ({ className = '', ...props }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const text = colorMode === 'dark' ? 'light' : 'dark';
  const SwitchIcon = colorMode === 'dark' ? BsSun : BsMoon;

  return (
    <button
      type="button"
      aria-label={`Switch to ${text} mode`}
      onClick={toggleColorMode}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-md bg-transparent text-lg text-blue-600 transition-colors hover:bg-[rgba(52,52,52,0.2)] dark:text-yellow-500 ${className}`}
      {...props}
    >
      <SwitchIcon />
    </button>
  );
};
