import auth from '../services/auth';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles/Signup.css'; // Import the CSS file

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handlesignup = async (e) => {
    e.preventDefault();
    const credentials = { name, email, password }; // Define credentials here

    try {
      const response = await auth.signup(credentials);
console.log(response.data)
    
      if (response.data ) {
        // If signup is successful, navigate to login after a delay
        setTimeout(() => {
          navigate('/signin');
        }, 5000);
      } else {
        // Handle other response statuses (e.g., display an alert)
        console.error('Signup failed. Unexpected response:', response);
        alert('Signup failed. Unexpected response');
      }
    } catch (error) {
      // Handle signup failure
      console.error('Error during signup:', error);
      alert('Signup failed. ' + error); // Display an alert with the error message
    }

    // Clear form fields
    setName('');
    setEmail('');
    setPassword('');
  }

  return (
    <div className="signup-container">
      <h2 className="signup-title">Welcome to the Task Management Application</h2>
      <form className="signup-form" onSubmit={handlesignup}>
        <input
          className="signup-input"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br />

        <input
          className="signup-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br />

        <input
          className="signup-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br />

        <button className="signup-button" type="submit">Sign Up</button>
      </form>

      <p className="signin-link">
        Already registered? <Link to="/signin">Sign In</Link>
      </p>
    </div>
  )
}

export default Signup;
