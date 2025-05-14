import React from 'react';

const TileButton = ({ label, onClick }) => {
  return (
    <button
      className="rounded bg-blue-600 px-3 py-1 text-sm text-white hover:bg-blue-700"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default TileButton;
