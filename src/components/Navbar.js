import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar({ onLogout }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <nav className="w-full bg-blue-600 text-white px-4 py-3 flex items-center justify-between shadow mb-6">
        {/* Left side - Hamburger menu */}
        <div className="flex items-center space-x-4">
          <button
            className="text-2xl font-bold"
            onClick={() => setSidebarOpen(true)}
          >
            ☰
          </button>
          <span className="text-xl font-semibold">Drone Logbook</span>
        </div>

        {/* Right side - Plus and Settings */}
        <div className="flex items-center space-x-4">
          <button
            className="text-2xl"
            onClick={() => alert('Add menu clicked!')}
          >
            ＋
          </button>
          <button
            className="text-2xl"
            onClick={() => alert('Settings menu clicked!')}
          >
            ⋮
          </button>
        </div>
      </nav>

      {/* Sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setSidebarOpen(false)}
        >
          <div
            className="bg-white w-64 h-full p-6 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold mb-4">Menu</h2>
            <ul className="space-y-2">
            <li>
                <button
                  className="hover:underline w-full text-left"
                  onClick={() => {
                    navigate('/');
                    setSidebarOpen(false);
                  }}
                >
                  Dashboard
                </button>
              </li>
              <li>
                <button
                  className="hover:underline w-full text-left"
                  onClick={() => {
                    navigate('/flights');
                    setSidebarOpen(false);
                  }}
                >
                  Flights
                </button>
              </li>

              <li>
                <button
                  className="hover:underline w-full text-left"
                  onClick={() => {
                    navigate('/inventory');
                    setSidebarOpen(false);
                  }}
                >
                  Inventory
                </button>
              </li>

              <li>
                <button
                  className="hover:underline w-full text-left"
                  onClick={() => {
                    navigate('/maintenance');
                    setSidebarOpen(false);
                  }}
                >
                  Maintenance
                </button>
              </li>

              <li>
                <button
                  className="hover:underline w-full text-left"
                  onClick={() => {
                    navigate('/reports');
                    setSidebarOpen(false);
                  }}
                >
                  Reports
                </button>
              </li>
              <li>
                <button
                  className="hover:underline w-full text-left"
                  onClick={() => {
                    setSidebarOpen(false);
                    onLogout();
                  }}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
