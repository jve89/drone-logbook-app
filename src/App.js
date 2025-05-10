import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import AddCertificate from './components/AddCertificate';
import AddFlight from './components/AddFlight';
import AddIncident from './components/AddIncident';
import AddInventory from './components/AddInventory';
import AddMaintenance from './components/AddMaintenance';
import AddTraining from './components/AddTraining';
import ApplyFilters from './components/ApplyFilters';
import CustomizeDashboard from './components/CustomizeDashboard';
import Dashboard from './components/Dashboard';
import FlightLogForm from './components/FlightLogForm';
import FlightLogList from './components/FlightLogList';
import Inventory from './components/Inventory';
import LoginForm from './components/LoginForm';
import Maintenance from './components/Maintenance';
import Navbar from './components/Navbar';
import Reports from './components/Reports';
import { auth } from './firebase';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // eslint-disable-next-line no-unused-vars
  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert('Logged out successfully!');
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  return (
    <Router>
      <div className="flex min-h-screen flex-col items-center justify-start bg-gray-100 p-6">
        <h1 className="mb-6 text-3xl font-bold text-gray-800">
          Drone Logbook App
        </h1>
        {user ? (
          <>
            <Navbar onLogout={handleLogout} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route
                path="/flights"
                element={
                  <div>
                    <FlightLogForm user={user} />
                    <FlightLogList user={user} />
                  </div>
                }
              />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/maintenance" element={<Maintenance />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/add-flight" element={<AddFlight />} />
              <Route path="/add-flight" element={<AddFlight />} />
              <Route path="/add-maintenance" element={<AddMaintenance />} />
              <Route path="/add-inventory" element={<AddInventory />} />
              <Route path="/add-certificate" element={<AddCertificate />} />
              <Route path="/add-training" element={<AddTraining />} />
              <Route path="/add-incident" element={<AddIncident />} />
              <Route
                path="/customize-dashboard"
                element={<CustomizeDashboard />}
              />
              <Route path="/apply-filters" element={<ApplyFilters />} />
            </Routes>
          </>
        ) : (
          <LoginForm />
        )}
      </div>
    </Router>
  );
}

export default App;
