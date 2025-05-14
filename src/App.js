import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import AddCertificate from './components/AddCertificate';
import AddFlight from './components/AddFlight';
import AddIncident from './components/AddIncident';
import AddInventory from './components/AddInventory';
import AddTraining from './components/AddTraining';
import ApplyFilters from './components/ApplyFilters';
import CustomizeDashboard from './components/CustomizeDashboard';
import FlightLogForm from './components/FlightLogForm';
import FlightLogList from './components/FlightLogList';
import Inventory from './components/Inventory';
import LoginForm from './components/LoginForm';
import Maintenance from './components/Maintenance';
import Navbar from './components/Navbar';
import Reports from './components/Reports';
import { ThemeProvider } from './context/ThemeContext';
import { auth } from './firebase';
import AddCertificatePage from './pages/AddCertificatePage';
import AddFlightPage from './pages/AddFlightPage';
import AddIncidentPage from './pages/AddIncidentPage';
import AddInventoryPage from './pages/AddInventoryPage';
import AddMaintenancePage from './pages/AddMaintenancePage';
import AddTrainingPage from './pages/AddTrainingPage';
import Dashboard from './pages/Dashboard';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert('Logged out successfully!');
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  return (
    <ThemeProvider>
      <Router>
        <div className="flex min-h-screen flex-col items-center justify-start bg-gray-100">
          {user ? (
            <>
              <Navbar onLogout={handleLogout} />
              <Routes>
                <Route path="/" element={<Dashboard user={user} />} />
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
                <Route path="/add-inventory" element={<AddInventory />} />
                <Route path="/add-certificate" element={<AddCertificate />} />
                <Route path="/add-training" element={<AddTraining />} />
                <Route path="/add-incident" element={<AddIncident />} />
                <Route
                  path="/customize-dashboard"
                  element={<CustomizeDashboard />}
                />
                <Route path="/apply-filters" element={<ApplyFilters />} />
                <Route path="/add-flight" element={<AddFlightPage />} />
                <Route
                  path="/add-maintenance"
                  element={<AddMaintenancePage />}
                />
                <Route path="/add-inventory" element={<AddInventoryPage />} />
                <Route
                  path="/add-certificate"
                  element={<AddCertificatePage />}
                />
                <Route path="/add-training" element={<AddTrainingPage />} />
                <Route path="/add-incident" element={<AddIncidentPage />} />
              </Routes>
            </>
          ) : (
            <LoginForm />
          )}
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
