import React from 'react';

function PageCard({ children }) {
  return (
    <div className="w-full max-w-2xl rounded bg-white p-6 shadow">
      {children}
    </div>
  );
}

export default PageCard;
