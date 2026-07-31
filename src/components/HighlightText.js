import React from 'react';

export default function HighlightText({ query, className = '', children }) {
  const text = String(children);
  const index = query ? text.indexOf(query) : -1;

  if (index === -1) {
    return <>{text}</>;
  }

  const before = text.slice(0, index);
  const match = text.slice(index, index + query.length);
  const after = text.slice(index + query.length);

  return (
    <>
      {before}
      <span className={className}>{match}</span>
      {after}
    </>
  );
}
