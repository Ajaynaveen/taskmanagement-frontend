import React, { useState } from 'react';
import taskService from '../services/taskService';
import { useDispatch } from 'react-redux';

function EditTaskForm({ task,updateEditedTask  }) {
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const [editedDueDate, setEditedDueDate] = useState(task.dueDate);
  const dispatch = useDispatch();

  const handleEditSubmit = async (e) => {
    e.preventDefault();

    const updatedTask = {
      title: editedTitle,
      description: editedDescription,
      dueDate: editedDueDate,
    };
    updatedTask._id=task._id


    await taskService.editTask(dispatch,task._id, updatedTask);

                
 
    updateEditedTask(updatedTask);

    // Clear input fields after successful task editing
    setEditedTitle('');
    setEditedDescription('');
    setEditedDueDate('');
  };

  return (
    <div className="edit-task-form-container">
      <h2>Edit Task</h2>
      <form onSubmit={handleEditSubmit}>
        <label>Title:</label>
        <input
          type="text"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
          required
        />
        <br />
        <label>Description:</label>
        <textarea
          value={editedDescription}
          onChange={(e) => setEditedDescription(e.target.value)}
          required
        />
        <br />
        <label>Due Date:</label>
        <input
          type="date"
          value={editedDueDate}
          onChange={(e) => setEditedDueDate(e.target.value)}
        />
        <br />
        <button className="save-button" type="submit">
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default EditTaskForm;
