import { useDispatch } from "react-redux";
import auth from '../services/auth';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles/signin.css'; // Import the CSS file

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlesignin = async (e) => {
    e.preventDefault();
    // Define credentials here
    const user = await auth.signin({ email, password });
    console.log(user);

    setEmail('');
    setPassword('');
    if (user) {
      await dispatch({ type: "SIGNIN_SUCCESS", payload: user });
    }
    navigate('/dashboard');
  };

  return (
    <div className="signin-container"> 
      <h2>Login</h2>
      <form onSubmit={handlesignin}>
        <input
          className="signin-input" 
          type="email"
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          className="signin-input" 
          type="password"
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button className="signin-button" type="submit">Sign In</button> 
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
}

export default Signin;
