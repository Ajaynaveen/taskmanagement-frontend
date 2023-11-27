import React, { useState } from 'react';
import axios from 'axios';

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

function ForgetPassword() {
  const [formData, setFormData] = useState({
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      alert("password has been sent succesfully")
      const response = await axios.post('http://localhost:3001/api/users/forgetpassword', formData);

      console.log(response, "res");

      if (response.status === 200) {
        console.log('Password reset email sent successfully');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div style={containerStyle}>
      <h1>Forget Password</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          style={inputStyle}
          required
        />
        <button type="submit" style={buttonStyle}>Submit</button>
      </form>
    </div>
  );
}

export default ForgetPassword;
