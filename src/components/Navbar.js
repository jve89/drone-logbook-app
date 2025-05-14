import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

function Navbar({ onLogout }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const [addMenuOpen, setAddMenuOpen] = useState(false);
  const [settingsMenuOpen, setSettingsMenuOpen] = useState(false);

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <nav className="navbar mb-6 flex w-full items-center justify-between px-4 py-3 shadow">
        <div className="flex items-center space-x-4">
          <button
            className="text-2xl font-bold"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle sidebar"
          >
            ☰
          </button>

          <span className="text-xl font-semibold">Drone Logbook</span>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <button
              className="text-2xl"
              onClick={() => setAddMenuOpen(!addMenuOpen)}
            >
              ＋
            </button>

            {addMenuOpen && (
              <>
                <div
                  className="overlay fixed inset-0 z-40"
                  onClick={() => setAddMenuOpen(false)}
                />

                <div className="dropdown-menu absolute right-0 z-50 mt-2 w-48 rounded shadow-lg">
                  <button
                    className="block w-full px-4 py-2 text-left hover:bg-gray-100 hover:text-blue-600"
                    onClick={() => {
                      navigate('/add-flight');
                      setAddMenuOpen(false);
                    }}
                  >
                    Add Flight
                  </button>
                  <button
                    className="block w-full px-4 py-2 text-left hover:bg-gray-100 hover:text-blue-600"
                    onClick={() => {
                      navigate('/add-maintenance');
                      setAddMenuOpen(false);
                    }}
                  >
                    Add Maintenance
                  </button>
                  <button
                    className="block w-full px-4 py-2 text-left hover:bg-gray-100 hover:text-blue-600"
                    onClick={() => {
                      navigate('/add-inventory');
                      setAddMenuOpen(false);
                    }}
                  >
                    Add Inventory
                  </button>
                  <button
                    className="block w-full px-4 py-2 text-left hover:bg-gray-100 hover:text-blue-600"
                    onClick={() => {
                      navigate('/add-certificate');
                      setAddMenuOpen(false);
                    }}
                  >
                    Add Certificate
                  </button>
                  <button
                    className="block w-full px-4 py-2 text-left hover:bg-gray-100 hover:text-blue-600"
                    onClick={() => {
                      navigate('/add-training');
                      setAddMenuOpen(false);
                    }}
                  >
                    Add Training
                  </button>
                  <button
                    className="block w-full px-4 py-2 text-left hover:bg-gray-100 hover:text-blue-600"
                    onClick={() => {
                      navigate('/add-incident');
                      setAddMenuOpen(false);
                    }}
                  >
                    Add Incident
                  </button>
                </div>
              </>
            )}
          </div>

          <div className="relative">
            <button
              className="text-2xl"
              onClick={() => setSettingsMenuOpen(!settingsMenuOpen)}
            >
              ⋮
            </button>

            {settingsMenuOpen && (
              <>
                <div
                  className="overlay fixed inset-0 z-40"
                  onClick={() => setSettingsMenuOpen(false)}
                />

                <div className="dropdown-menu absolute right-0 z-50 mt-2 w-48 rounded shadow-lg">
                  <button
                    className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                    onClick={() => {
                      navigate('/customize-dashboard');
                      setSettingsMenuOpen(false);
                    }}
                  >
                    Customize Dashboard
                  </button>
                  <button
                    className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                    onClick={() => {
                      navigate('/apply-filters');
                      setSettingsMenuOpen(false);
                    }}
                  >
                    Apply Filters
                  </button>
                  <button
                    className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                    onClick={() => {
                      toggleTheme();
                      setSettingsMenuOpen(false);
                    }}
                  >
                    Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </nav>

      {sidebarOpen && (
        <div
          className="overlay fixed bottom-0 left-0 right-0 top-[56px] z-40 transition-opacity duration-300"
          onClick={() => setSidebarOpen(false)}
        >
          <div
            className={`absolute left-0 top-0 h-full w-64 transform bg-white p-6 shadow-lg transition-transform duration-[1000ms] ease-in-out ${
              sidebarOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="mb-4 text-xl font-bold">Menu</h2>
            <ul className="space-y-2">
              <li>
                <button
                  className="w-full text-left hover:underline"
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
                  className="w-full text-left hover:underline"
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
                  className="w-full text-left hover:underline"
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
                  className="w-full text-left hover:underline"
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
                  className="w-full text-left hover:underline"
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
                  className="w-full text-left hover:underline"
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
