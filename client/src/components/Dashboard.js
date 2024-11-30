import { useEffect, useState } from 'react';
import { getDashboard, logout } from '../services/authService';
import Calculator from './Calculator';

function Dashboard() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await getDashboard();
        setMessage(res.data.message);
      } catch (err) {
        setMessage("Unauthorized access. Please log in.");
        setTimeout(() => (window.location = '/'), 1500);
      }
    };
    fetchDashboard();
  }, []);

  const handleLogout = () => {
    logout();
    window.location = '/';
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-semibold text-gray-700 mb-4">{message}</h1>
      <Calculator />
      <button
        onClick={handleLogout}
        className="px-4 py-2 mt-6 text-white bg-red-500 rounded-md"
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
