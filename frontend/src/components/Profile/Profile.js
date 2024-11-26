import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const user = JSON.parse(localStorage.getItem('user')); // Retrieve user data from localStorage

  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem('user');
    
    // Redirect to login page after logout
    navigate('/login');
  };

  if (!user) {
    // If no user is found in localStorage, redirect to login
    navigate('/login');
    return null;
  }

  return (
    <div className="profile-container">
      <h2>Welcome, {user.username || 'User'}!</h2>
      <p>Email: {user.email}</p>
      <button onClick={handleLogout} className="logout-button">Logout</button>
    </div>
  );
};

export default Profile;
