// import auth from '../services/auth';
// import React, { useState } from 'react'
// import { Link } from 'react-router-dom';

// function Signup() {
//     const[name,setname]=useState('')
//     const[email,setemail]=useState('');
//     const[password,setpassword]=useState('')

//     const handlesignup=(e)=>{
//             e.preventDefault();
//             const credentials = { name, email, password }; // Define credentials here
//             auth.signup(credentials);
//             setname('');
//             setemail('')
//             setpassword('')
//          }
   

   
//   return (
//    <div>
//     <form  onSubmit={handlesignup}>
        
//     <input type="text"
//             placeholder='name'
//             value={name}
//             onChange={(e)=>{
//                 setname(e.target.value)
//            }} /><br></br>

// <input type="email"
//              placeholder='email' 
//              value={email}
//             onChange={(e)=>{
//                 setemail(e.target.value)
//             }}/><br></br>

// <input type="password"
//             placeholder='password'
//             value={password}
//              onChange={(e)=>{
//                  setpassword(e.target.value);
//             }} /><br></br>

// <button type="submit">signup</button>
            
//     </form>
// <p>
//     altready registered?<Link to="/signin">signin</Link>
// </p>
    
//    </div> 
//   )
// }

// export default Signup


import auth from '../services/auth';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles/Signup.css'; // Import the CSS file

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const navigate=useNavigate();
  const handlesignup = (e) => {
    e.preventDefault();
    const credentials = { name, email, password }; // Define credentials here
    auth.signup(credentials);
    setName('');
    setEmail('');
    setPassword('');
    navigate('/signin')
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
