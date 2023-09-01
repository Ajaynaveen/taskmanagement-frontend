import React, { useEffect, useState } from 'react'
import userServices from "../services/users"
import { useDispatch } from 'react-redux'
import {  useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './styles/Viewprofile.css'
function Viewprofile() {
    const[userProfile,setuserprofile]=useState({})
    const dispatch=useDispatch();
    const navigate = useNavigate() 
    useEffect(()=>{
        const loggedInUser=localStorage.getItem('loggedInUser');
        if(!loggedInUser){
            navigate('/signin')
        }


    },[])
    useEffect(()=>{
       
        userServices.getprofile(dispatch)
        .then((response)=>{
            console.log(response);
            setuserprofile(response)
        })
        .catch((error)=>{
            console.log("Error", error)})
        
        
            },[])
            const handleLogout=()=>{
                localStorage.removeItem('loggedInUser')
                navigate('/signin')
                setuserprofile({})
                dispatch({
                    type:'USER_LOGOUT',
                })
            }
            
            const handleDeleteProfile = async() => {
                await userServices.deleteProfile()
                   .then(() => {
                     localStorage.removeItem('loggedInUser');
                     navigate('/signin');
                   })
                   .catch((error) => {
                     console.log('Error deleting profile', error);
                   });
               };
  return (
    <div className="view-profile-container">
    <p>{userProfile.name} has logged in!!!</p>
    <button onClick={handleLogout}>Logout</button>
    <h1>Name: {userProfile.name}</h1>
    <h2>Email: {userProfile.email}</h2>
    <h3>User Profile Created: {Date(userProfile.createdAt)}</h3>
    <h3>User Profile Updated: {Date(userProfile.updatedAt)}</h3>

    <Link to="/editprofile" className="profile-link">Edit Profile</Link>
    <Link to="/dashboard" className="profile-link">Dashboard</Link>
    <button onClick={handleDeleteProfile}>Delete Profile</button>
  </div>



  )
}


export default Viewprofile;