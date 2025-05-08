import React, { useState, useEffect } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import FlightLogForm from './components/FlightLogForm';
import LoginForm from './components/LoginForm';
import FlightLogList from './components/FlightLogList';
import Navbar from './components/Navbar';
import Inventory from './components/Inventory';
import Maintenance from './components/Maintenance';
import Reports from './components/Reports';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

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
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Drone Logbook App</h1>
        {user ? (
  <>
    <Navbar onLogout={handleLogout} />
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/flights" element={
        <div>
          <FlightLogForm user={user} />
          <FlightLogList user={user} />
        </div>
      } />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/maintenance" element={<Maintenance />} />
      <Route path="/reports" element={<Reports />} />
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
