import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

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
    <div className="bg-white shadow rounded p-6 w-full max-w-md">
      <input
       type="email"
       placeholder="Email"
       value={email}
       onChange={(e) => setEmail(e.target.value)}
       className="border rounded w-full p-2 mb-4"
       required
      /><br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border rounded w-full p-2 mb-4"
       required
      /><br />
      <button
  onClick={handleRegister}
  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 mr-2"
>
  Register
</button>
<button
  onClick={handleLogin}
  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
>
  Login
</button>
    </div>
  );
}

export default LoginForm;
