import React from 'react';

function Dashboard() {
  return (
    <div className="w-full max-w-2xl rounded bg-white p-6 shadow">
      <h2 className="mb-4 text-2xl font-bold">Dashboard</h2>
      <p>Welcome to your drone logbook dashboard!</p>
      <p>
        Here you can navigate to Flights, Equipment, Maintenance, and Reports.
      </p>
    </div>
  );
}

export default Dashboard;
