import { useState } from 'react';
import { register } from '../services/authService';

function Register({ onRegisterSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState({ email: '', password: '' });
  const [passwordFeedback, setPasswordFeedback] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);

    if (!validateEmail(emailValue)) {
      setError((prev) => ({ ...prev, email: 'Invalid email format' }));
    } else {
      setError((prev) => ({ ...prev, email: '' }));
    }
  };

  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);

    if (!validatePassword(passwordValue)) {
      setPasswordFeedback(
        'Password must be at least 8 characters long, include uppercase, lowercase, a number, and a special character.'
      );
    } else {
      setPasswordFeedback('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError((prev) => ({ ...prev, email: 'Invalid email format' }));
      return;
    }
    if (!validatePassword(password)) {
      setPasswordFeedback(
        'Password must meet the required criteria.'
      );
      return;
    }

    try {
      await register(email, password);
      setMessage("Registration successful! Redirecting to login...");
      onRegisterSuccess();
    } catch (err) {
      setMessage("Registration failed. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <input
        type="email"
        className="w-full p-2 mb-1 border border-gray-300 rounded-md"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
      />
      {error.email && <p className="mb-2 text-sm text-red-500">{error.email}</p>}

      <input
        type="password"
        className="w-full p-2 mb-1 border border-gray-300 rounded-md"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
      />
      {passwordFeedback && <p className="mb-2 text-sm text-red-500">{passwordFeedback}</p>}

      <button className="w-full px-4 py-2 text-white bg-green-500 rounded-md">Register</button>
      <p className="mt-4 text-center text-sm text-gray-600">{message}</p>
    </form>
  );
}

export default Register;
