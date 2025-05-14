import React from 'react';

const SimpleDashboardGrid = ({ children }) => {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '1rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '1rem',
      }}
    >
      {children}
    </div>
  );
};

export default SimpleDashboardGrid;
