import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import userservices from "../services/users"
import { NavLink, useNavigate } from 'react-router-dom';
import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';
import "./styles/Dashboard.css"
import taskService from '../services/taskService';


function Dashboard() {
    const[userprofile,setuserprofile]=useState({})
    const [tasks, setTasks] = useState([]);
    const [showAddTaskForm, setShowAddTaskForm] = useState(false);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    useEffect(()=>{
       
userservices.getprofile(dispatch)
.then((response)=>{
    console.log(response);
    setuserprofile(response)
})
taskService.getTasks(dispatch)
      .then((response) => {
        if (response) {
          setTasks(response); // Set tasks to response
        }
      })
      .catch((error) => {
        console.error('Error fetching tasks', error);
      });
  }, [dispatch]);
  const refreshTaskList = (updatedTasks) => {
    // This function is called from AddTaskForm to update the task list
    setTasks(updatedTasks);
  };

  

    
    const handleLogout=()=>{
        localStorage.removeItem('loggedInUser')
        navigate('/signin')
        setuserprofile({})
        dispatch({
            type:'USER_LOGOUT',
        })
    }
    const toggleAddTaskForm = () => {
        setShowAddTaskForm(!showAddTaskForm);
      };
     
    
   
  return (
    
    <div className="dashboard-container"> 
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
    </ul>
    <button onClick={toggleAddTaskForm} className="add-task-button">
        {showAddTaskForm ? 'Close' : 'Add Task'}
      </button>
      {showAddTaskForm && <AddTaskForm refreshTaskList={refreshTaskList}/>}
    <TaskList tasks={tasks} />
    </div>
  )
}

export default Dashboard