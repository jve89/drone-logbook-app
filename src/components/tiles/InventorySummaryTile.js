import React from 'react';
import Tile from '../Tile';
import TileContentWrapper from './TileContentWrapper';

const InventorySummaryTile = () => {
  const stats = [
    { label: 'Total Items', value: 12 },
    { label: 'Critical', value: 2 },
  ];

  return (
    <Tile>
      <TileContentWrapper>
        <h3 className="text-lg font-semibold mb-2">Inventory Summary</h3>
        <div className="flex flex-col gap-1 text-sm text-gray-700">
          {stats.map((stat, index) => (
            <p key={index}>
              {stat.label}: <span className="font-bold">{stat.value}</span>
            </p>
          ))}
        </div>
      </TileContentWrapper>
    </Tile>
  );
};

export default InventorySummaryTile;
