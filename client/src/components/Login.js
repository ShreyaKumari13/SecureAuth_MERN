import { useState } from 'react';
import { login } from '../services/authService';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError({ email: '', password: '' });
    let hasError = false;

    if (!email) {
      setError((prev) => ({ ...prev, email: 'Email is required' }));
      hasError = true;
    }
    if (!password) {
      setError((prev) => ({ ...prev, password: 'Password is required' }));
      hasError = true;
    }

    if (hasError) return;

    try {
      await login(email, password);
      window.location = '/dashboard';
    } catch (err) {
      setMessage("Login failed. Check your credentials.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <input
        className="w-full p-2 mb-1 border border-gray-300 rounded-md"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      {error.email && <p className="mb-2 text-sm text-red-500">{error.email}</p>}

      <input
        className="w-full p-2 mb-1 border border-gray-300 rounded-md"
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      {error.password && <p className="mb-2 text-sm text-red-500">{error.password}</p>}

      <button className="w-full px-4 py-2 text-white bg-blue-500 rounded-md">Login</button>
      <p className="mt-4 text-center text-sm text-gray-600">{message}</p>
    </form>
  );
}

export default Login;
