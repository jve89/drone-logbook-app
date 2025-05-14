import React from 'react';
import Tile from '../Tile';
import TileContentWrapper from './TileContentWrapper';

const TrainingSummaryTile = () => {
  const stats = [
    { label: 'Completed', value: 5 },
    { label: 'Due Soon', value: 1 },
  ];

  return (
    <Tile>
      <TileContentWrapper>
        <h3 className="text-lg font-semibold mb-2">Training Summary</h3>
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

export default TrainingSummaryTile;
