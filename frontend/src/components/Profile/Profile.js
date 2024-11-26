import React from 'react';

const Profile = ({ onLogout }) => {
  const user = JSON.parse(localStorage.getItem('user')); // Retrieve user data from localStorage

  return (
    <div className="profile-container">
      <h2>Welcome, {user ? user.username : 'User'}!</h2>
      <p>Email: {user?.email}</p>
      <button onClick={onLogout} className="logout-button">Logout</button>
    </div>
  );
};

export default Profile;
