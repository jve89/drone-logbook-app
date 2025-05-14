import React from 'react';
import Tile from '../Tile';
import TileContentWrapper from './TileContentWrapper';

const FlightSummaryTile = () => {
  const stats = [
    { label: 'Total Flights', value: 123 },
    { label: 'Total Hours', value: '456h' },
    { label: 'Average Duration', value: '1.5h' },
  ];

  return (
    <Tile>
      <TileContentWrapper>
        <h3 className="text-lg font-semibold mb-2">Flight Summary</h3>
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

export default FlightSummaryTile;
