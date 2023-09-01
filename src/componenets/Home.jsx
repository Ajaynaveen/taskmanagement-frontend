// Home.js

import React from 'react';
import NavBar from './NavBar';
import './styles/Home.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="container"> {/* Apply the CSS class */}
      <NavBar />
      <h2>Welcome to the React Application</h2>
      <p>This application allows users to log in and manage their tasks.</p>
      <p>Moreover, authenticated users can:</p>
      <ul>
        <li>View Profile</li>
        <li>Edit Profile</li>
        <li>Delete Profile</li>
      </ul>
    </div>
  );
};

export default Home;
