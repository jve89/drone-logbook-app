import React, { useEffect, useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

function FlightLogList({ user }) {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const fetchFlights = async () => {
      const q = query(collection(db, 'flights'), where('userId', '==', user.uid));
      const querySnapshot = await getDocs(q);
      const flightData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setFlights(flightData);
    };

    fetchFlights();
  }, [user]);

  return (
    <div className="w-full max-w-2xl bg-white shadow rounded p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Flight Logs</h2>
      {flights.length === 0 ? (
        <p>No flight logs found.</p>
      ) : (
        <ul className="space-y-4">
          {flights.map((flight) => (
            <li key={flight.id} className="border rounded p-4 bg-gray-50 shadow-sm">
            <p><strong>Date:</strong> {flight.date}</p>
            <p><strong>Location:</strong> {flight.location}</p>
            <p><strong>Aircraft:</strong> {flight.aircraft}</p>
            <p><strong>Duration:</strong> {flight.duration} mins</p>
            {flight.notes && <p><strong>Notes:</strong> {flight.notes}</p>}
          </li>
          
          ))}
        </ul>
      )}
    </div>
  );
}

export default FlightLogList;
