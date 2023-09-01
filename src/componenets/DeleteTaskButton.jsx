import React from 'react';
import taskService from '../services/taskService';
import { useDispatch } from 'react-redux';
import "./styles/DeleteTaskbutton.css"
function DeleteTaskButton({ taskId, setTaskList }) {
  const dispatch = useDispatch();

  const handleDeleteTask = async () => {
    const deletionConfirmed = window.confirm('Are you sure you want to delete this task?');
    if (deletionConfirmed) {
      const deletionSuccessful = await taskService.deleteTask(dispatch, taskId);
      if (deletionSuccessful) {
        // Update the task list state after deletion
        setTaskList((prevTaskList) => prevTaskList.filter((task) => task._id !== taskId));
      }
    }
  };

  return (
    <button onClick={handleDeleteTask} className="delete-task-button">Delete Task</button> 
  );
}

export default DeleteTaskButton;
