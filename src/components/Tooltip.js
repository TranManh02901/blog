import React from 'react';

export default function Tooltip({ label, children }) {
  return (
    <span className="relative inline-flex group">
      {children}
      <span
        role="tooltip"
        className="pointer-events-none absolute left-1/2 top-full z-10 mt-1 -translate-x-1/2 whitespace-nowrap rounded-full bg-gray-700 dark:bg-gray-300 px-2 py-1 text-sm text-white dark:text-gray-900 opacity-0 scale-95 transition-all duration-100 [font-family:'Calibri_Light'] group-hover:opacity-100 group-hover:scale-100"
      >
        {label}
      </span>
    </span>
  );
}
