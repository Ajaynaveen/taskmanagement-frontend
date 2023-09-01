
import React  from "react";

import {Route,BrowserRouter as Router, Routes}from "react-router-dom"
import Home from "./componenets/Home";
import Signup from "./componenets/Signup";
import Signin from "./componenets/Signin";
import Dashboard from "./componenets/Dashboard";
import Viewprofile from "./componenets/Viewprofile";
import Editprofile from "./componenets/Editprofile";
import Deleteprofile from "./componenets/Deleteprofile";
import AddTaskForm from "./componenets/AddTaskForm";
import TaskList from "./componenets/TaskList";
import EditTaskForm from "./componenets/EditTaskForm";
import DeleteTaskButton from "./componenets/DeleteTaskButton";

function App() {
 

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
         <Route path="/signup" element={<Signup/>}/>
         <Route path="/signin" element={<Signin/>}/>
         <Route path="/dashboard" element={<Dashboard/>}/>
         <Route path="/viewprofile" element={<Viewprofile/>}/>
         <Route path="/editprofile" element={<Editprofile/>}/>
         <Route path="/deleteprofile" element={<Deleteprofile/>}/>
         <Route path="/createtask" element={<AddTaskForm/>}/>
         <Route path="/createtask" element={<TaskList/>}/>
         <Route path="/edittask" element={<EditTaskForm/>}/>
         <Route path="/deletetask" element={<DeleteTaskButton/>}/>
        </Routes>
        
      </div>
     
    </Router>
  )
}

export default App
