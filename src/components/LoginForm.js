import React, { useState } from 'react';
import { auth } from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Registration successful!');
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Login successful!');
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  return (
    <div className="w-full max-w-md rounded bg-white p-6 shadow">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-4 w-full rounded border p-2"
        required
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-4 w-full rounded border p-2"
        required
      />
      <br />
      <button
        onClick={handleRegister}
        className="mr-2 rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
      >
        Register
      </button>
      <button
        onClick={handleLogin}
        className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        Login
      </button>
    </div>
  );
}

export default LoginForm;
