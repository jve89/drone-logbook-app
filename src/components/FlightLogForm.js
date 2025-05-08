import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

function FlightLogForm({ user }) {
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [aircraft, setAircraft] = useState('');
  const [duration, setDuration] = useState('');
  const [notes, setNotes] = useState('');

  const saveFlightLog = async () => {
    try {
      await addDoc(collection(db, 'flights'), {
        userId: user.uid,
        date,
        location,
        aircraft,
        duration,
        notes
      });
      alert('Flight log saved!');
      setDate('');
      setLocation('');
      setAircraft('');
      setDuration('');
      setNotes('');
    } catch (error) {
      alert('Error saving flight log: ' + error.message);
    }
  };

  return (
    <div className="bg-white shadow rounded p-6 w-full max-w-md mb-6">
      <h2>New Flight Log</h2>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="border rounded w-full p-2 mb-4"
      /><br />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="border rounded w-full p-2 mb-4"
      /><br />
      <input
        type="text"
        placeholder="Aircraft"
        value={aircraft}
        onChange={(e) => setAircraft(e.target.value)}
        className="border rounded w-full p-2 mb-4"
      /><br />
      <input
        type="number"
        placeholder="Duration (minutes)"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        className="border rounded w-full p-2 mb-4"
      /><br />
      <textarea
        placeholder="Notes"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        className="border rounded w-full p-2 mb-4"
      /><br />
      <button
  onClick={saveFlightLog}
  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
>
  Save Flight Log
</button>
    </div>
  );
}

export default FlightLogForm;
