import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useSearchParams } from 'react-router-dom';

const ResetPassword = () => {
  const navigate = useNavigate();
  const token = useSearchParams();
  console.log(token);

  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: '',
  });

  const containerStyle = {
    textAlign: 'center',
    backgroundColor: '#f0f0f0',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const inputStyle = {
    margin: '10px',
    padding: '5px',
    borderRadius: '3px',
    border: '1px solid #ccc',
    width: '100%',
  };

  const buttonStyle = {
    marginTop: '10px',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { newPassword, confirmPassword } = formData;
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match. Please make sure both fields have the same value.');
      return;
    }

    try {
      // Extracting token from the URL search params
      const urlSearchParams = new URLSearchParams(window.location.search);
      const token = urlSearchParams.get('token');

      // Making the POST request with the token as a parameter
      const response = await axios.post(`http://localhost:3001/api/users/reset-password/${token}`, {
        newPassword,
      });

      if (response.status === 200) {
        console.log('Password reset successfully');
        navigate('/signin');
      }
    } catch (error) {
      console.error('Error resetting password:', error);
    }
  };

  return (
    <div style={containerStyle}>
      <h1>Reset Password</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="password"
          id="newPassword"
          name="newPassword"
          value={formData.newPassword}
          onChange={handleChange}
          placeholder="New Password"
          style={inputStyle}
          required
        />
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
          style={inputStyle}
          required
        />
        <button type="submit" style={buttonStyle}>
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
