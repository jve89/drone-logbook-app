import React from 'react';

const TileContentWrapper = ({ children }) => {
  return (
    <div className="flex h-full flex-col">
      {/* Content that grows but never pushes the button outside */}
      <div className="flex-grow overflow-hidden">{children}</div>
    </div>
  );
};

export default TileContentWrapper;
