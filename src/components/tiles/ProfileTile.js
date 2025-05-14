import React from 'react';
import Tile from '../Tile';
import TileContentWrapper from './TileContentWrapper';
import TileButton from './TileButton';

const ProfileTile = ({ user }) => {
  const photoURL = user?.photoURL || 'https://via.placeholder.com/80';
  const displayName = user?.displayName || user?.email || 'Guest';
  const totalFlightTime = '48h 30m';
  const totalFlights = 125;

  return (
    <Tile>
      <TileContentWrapper>
        <div className="flex flex-col items-center flex-grow overflow-hidden">
          <img
            src={photoURL}
            alt="Profile"
            className="mb-1 h-14 w-14 rounded-full object-cover"
          />
          <h3 className="text-center text-base font-semibold leading-tight break-words">
            {displayName}
          </h3>
          <p className="mb-1 text-xs text-gray-500">Drone Pilot</p>
          <div className="text-center text-xs text-gray-700 space-y-1">
            <p>
              <span className="font-bold">{totalFlightTime}</span> total flight
              time
            </p>
            <p>
              <span className="font-bold">{totalFlights}</span> flights logged
            </p>
          </div>
        </div>

        <div className="mt-2 w-full flex justify-center">
          <TileButton label="View Profile" onClick={() => alert('Profile')} />
        </div>
      </TileContentWrapper>
    </Tile>
  );
};

export default ProfileTile;
