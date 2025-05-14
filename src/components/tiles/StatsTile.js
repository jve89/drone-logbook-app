import React from 'react';
import Tile from '../Tile';
import TileContentWrapper from './TileContentWrapper';

const StatsTile = ({ title, stats }) => {
  return (
    <Tile>
      <TileContentWrapper>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        {stats.map((stat, index) => (
          <p key={index} className="text-sm text-gray-700">
            {stat.label}: <span className="font-bold">{stat.value}</span>
          </p>
        ))}
      </TileContentWrapper>
    </Tile>
  );
};

export default StatsTile;
