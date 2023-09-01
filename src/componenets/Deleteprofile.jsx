import React from 'react';
import userServices from '../services/users';
import { Link, useNavigate } from 'react-router-dom';
import './styles/Deleteprofile.css'

function Deleteprofile() {
  const navigate = useNavigate();

  const handleDeleteProfile = async() => {
   await userServices.deleteProfile()
      .then(() => {
        localStorage.removeItem('loggedInUser');
        alert('Profile deleted successfully!');
        navigate('/signin');
      })
      .catch((error) => {
        console.log('Error deleting profile', error);
        alert('Failed to delete profile. Please try again.');

      });
  };

  return (
    <div className="delete-profile">
      <h3>Are you sure you want to delete your profile completely?</h3>
      <button onClick={handleDeleteProfile}>Delete Profile</button>
      <Link to="/viewprofile">View Profile</Link>
    </div>
  );
}

export default Deleteprofile;
