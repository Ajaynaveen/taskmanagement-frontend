import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import userservices from "../services/users";
import { NavLink, useNavigate } from 'react-router-dom';
import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';
import "./styles/Dashboard.css";
import taskService from '../services/taskService';
import { useTheme } from './ThemeContext';

function Dashboard() {
  const [userprofile, setuserprofile] = useState({});
  const [tasks, setTasks] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { theme, toggleTheme, getFontStyles } = useTheme();
  useEffect(() => {
    userservices.getprofile(dispatch)
      .then((response) => {
        console.log(response);
        setuserprofile(response);
      });
    taskService.getTasks(dispatch)
      .then((response) => {
        if (response) {
          setTasks(response);
        }
      })
      .catch((error) => {
        console.error('Error fetching tasks', error);
      });
  }, [dispatch]);

  
  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    navigate('/signin');
    setuserprofile({});
    dispatch({
      type: 'USER_LOGOUT',
    });
  };

  return (
    <div className={`dashboard-container ${theme}`} style={getFontStyles()}>
     
      <h3>Welcome to the Profile Dashboard</h3>
      <p>
        {userprofile.name} has signed in{' '}
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </p>
      <ul className="dashboard-links">
        <li>
          <NavLink to="/viewprofile">View Profile</NavLink>
        </li>
        <li>
          <NavLink to="/editprofile">Edit Profile</NavLink>
        </li>
        <li>
          <NavLink to="/deleteprofile">Delete Profile</NavLink>
        </li>
     
      <li>
      <NavLink to="/createtask" className="add-task-link">
        Add Task
      </NavLink>
      </li>
      </ul>

      <button onClick={toggleTheme}>Toggle Theme</button>
     
      
      <TaskList tasks={tasks} />
    </div>
  );
}

export default Dashboard;
