import React, { useState } from 'react';
import taskService from '../services/taskService';
import { useDispatch } from 'react-redux';

function AddTaskForm({ refreshTaskList }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newTask = {
        title,
        description,
        dueDate,
      };

      // Create the new task
      await taskService.createTask(dispatch, newTask);

      // Fetch the updated task list
      const updatedTasks = await taskService.getTasks(dispatch);

      // Update the task list in the parent component
      refreshTaskList(updatedTasks);

      // Clear input fields after successful task creation
      setTitle('');
      setDescription('');
      setDueDate('');
    } catch (error) {
      console.error('Error creating task', error);
    }
  };

  return (
    <div>
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <br />
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <br />
        <label>Due Date:</label>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <br />
        <button type="submit">Create Task</button>
      </form>
    </div>
  );
}

export default AddTaskForm;
