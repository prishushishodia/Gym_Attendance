import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

// Home Component
const Home = () => (
  <div className="text-center">
    <h2 className="text-3xl font-bold text-white">Welcome to the Gym Attendance System</h2>
    <p className="text-lg mt-4 text-gray-300">Track your attendance and manage your workout schedule efficiently.</p>
  </div>
);

// Login Component
const Login = () => (
  <div className="text-center">
    <h2 className="text-3xl font-bold text-white">Login Page</h2>
    <p className="text-lg mt-4 text-gray-300">Please log in to access your account.</p>
  </div>
);

// Register Component
const Register = () => (
  <div className="text-center">
    <h2 className="text-3xl font-bold text-white">Register Page</h2>
    <p className="text-lg mt-4 text-gray-300">Create an account to start tracking your attendance.</p>
  </div>
);

const App = () => {
  const [nightMode, setNightMode] = useState(false);

  const toggleNightMode = () => {
    setNightMode(!nightMode);
  };

  return (
    <Router>
      <div
        className={`min-h-screen ${
          nightMode ? 'bg-black' : 'bg-gradient-to-br from-gray-900 to-gray-800'
        } flex flex-col`}
      >
        {/* Navbar */}
        <nav className="w-full bg-gray-800 shadow-lg">
          <div className="container mx-auto flex items-center justify-between px-6 py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img
                src="https://cdn.pixabay.com/photo/2021/04/04/08/09/gym-logo-7291149_960_720.png" // Path to the logo image
                alt="Gym Logo"
                className="w-12 h-12" // Adjust size as needed
              />
              <div className="text-white text-2xl font-bold">Gym Attendance</div>
            </div>
            <div className="flex space-x-4">
              <Link
                to="/"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition ease-in-out duration-300 shadow-lg"
              >
                Home
              </Link>
              <Link
                to="/login"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition ease-in-out duration-300 shadow-lg"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition ease-in-out duration-300 shadow-lg"
              >
                Register
              </Link>
              <button
                onClick={toggleNightMode}
                className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg transition ease-in-out duration-300 shadow-lg"
              >
                {nightMode ? 'Day Mode' : 'Night Mode'}
              </button>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <div className="flex-grow flex items-center justify-center text-center max-w-lg mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
