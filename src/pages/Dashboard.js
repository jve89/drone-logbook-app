import React from 'react';
import SortableDashboardGrid from '../components/SortableDashboardGrid';
import ProfileTile from '../components/tiles/ProfileTile';
import StatsTile from '../components/tiles/StatsTile';
import dashboardTiles from '../config/dashboardTiles';

function Dashboard({ user }) {
  const tilesConfig = dashboardTiles(user);

  const tiles = [
    { id: 'profile', element: <ProfileTile user={user} /> },
    ...tilesConfig.map((tile, index) => ({
      id: `stats-${index}`,
      element: <StatsTile title={tile.title} stats={tile.stats} />,
    })),
  ];

  return <SortableDashboardGrid tiles={tiles} />;
}

export default Dashboard;
