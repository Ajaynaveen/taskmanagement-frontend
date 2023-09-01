import React, { useEffect, useState } from 'react';
import userServices from '../services/users';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import './styles/Editprofile.css';

function EditProfile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [userProfile, setUserProfile] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user profile and set initial values
    userServices.getprofile(dispatch).then((response) => {
      if (response) {
        setUserProfile(response);
        setName(response.name);
        setEmail(response.email);
      }
    });
  }, [dispatch]);

  const handleUpdateProfile = async () => {
    const updatedProfile = {
      name: name,
      email: email,
    };

    try {
      const response = await userServices.editProfile(updatedProfile);

      if (response) {
        console.log('Profile updated:', response);
        // You can also perform any additional actions if the update is successful
        navigate('/dashboard'); // Redirect to the dashboard
      } else {
        console.log('Profile update failed');
        // Handle failure, e.g., show an error message to the user
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      // Handle any errors that occurred during the update
    }
  };

  return (
    <div className="edit-profile">
      <h2>Edit Profile</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button type="button" onClick={handleUpdateProfile}>
          Update Profile
        </button>
        <Link to="/viewprofile">View Profile</Link>
        <br />
        <Link to="/dashboard">Dashboard</Link>
      </form>
    </div>
  );
}

export default EditProfile;
