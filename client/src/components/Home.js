import { useState } from 'react';
import Login from './Login';
import Register from './Register';

function Home() {
  const [isLogin, setIsLogin] = useState(true);

  // Callback function to switch to Login tab
  const redirectToLogin = () => setIsLogin(true);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="p-6 bg-white shadow-md rounded-lg w-96">
        <div className="flex justify-center mb-6">
          <button
            className={`w-1/2 py-2 ${isLogin ? 'border-b-2 border-blue-500' : ''}`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`w-1/2 py-2 ${!isLogin ? 'border-b-2 border-blue-500' : ''}`}
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>
        {isLogin ? <Login /> : <Register onRegisterSuccess={redirectToLogin} />}
      </div>
    </div>
  );
}

export default Home;
