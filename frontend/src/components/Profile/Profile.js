import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';  // Import the CSS file for styling

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

  // Default profile picture
  const defaultProfilePic = "https://i.pinimg.com/564x/8d/ff/49/8dff49985d0d8afa53751d9ba8907aed.jpg"; // Placeholder image

  return (
    <div className="profile-container">
      <div className="profile-card">
        {/* Profile picture */}
        <img
          src={defaultProfilePic}  // Default profile picture
          alt="Profile"
          className="profile-pic"
        />
        <h2 className="profile-header">Welcome, {user.username || 'User'}!</h2>
        <p className="profile-info">Email: {user.email}</p>
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </div>
    </div>
  );
};

export default Profile;
