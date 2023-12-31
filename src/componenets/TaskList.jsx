

// import React, { useState, useEffect } from 'react';
// import taskService from '../services/taskService';
// import { useDispatch } from 'react-redux';
// import EditTaskForm from './EditTaskForm';
// import DeleteTaskButton from './DeleteTaskButton';
// import './styles/TaskList.css'

// function TaskList({ tasks }) {
//   const [taskList, setTaskList] = useState([...tasks]);
//   const [editTaskId, setEditTaskId] = useState(null);
//   const dispatch = useDispatch();

//   const updateEditedTask = (updatedTask) => {
//     const updatedTasks = taskList.map((task) =>
//       task._id === updatedTask._id ? updatedTask : task
//     );
//     console.log(updatedTasks);
//     setTaskList(updatedTasks);
//     setEditTaskId(null);
//   };

//   useEffect(() => {
//     taskService
//       .getTasks(dispatch)
//       .then((response) => {
//         if (response) {
//           setTaskList(response);
//         }
//       })
//       .catch((error) => {
//         console.error('Error fetching tasks', error);
//       });
//   }, [dispatch, tasks]);

//   const handleEditClick = (taskId) => {
//     setEditTaskId(taskId);
//   };

//   return (
//     <div className="task-list-container">
//       <h2>Task List</h2>
//       <ul className="task-list">
//         {taskList.map((task) => (
//           <li key={task._id} className="task-item">
//             <h3 className="task-title">{task.title}</h3>
//             <p className="task-description">{task.description}</p>
//             <p className="task-due-date">
//               Due Date: {new Date(task.dueDate).toLocaleDateString()}
//             </p>
//             {editTaskId === task._id ? (
//               <EditTaskForm task={task} updateEditedTask={updateEditedTask} />
//             ) : (
//              <div> <button
//                 onClick={() => handleEditClick(task._id)}
//                 className="edit-button"
//               >
//                 Edit
//               </button></div>
//             )}
//             <br></br>
//             <div>
//             <DeleteTaskButton taskId={task._id} setTaskList={setTaskList}/>
//             </div>
            
//           </li>
//         ))}
//       </ul>
//     </div>
   
//   );
// }

// export default TaskList;


// TaskList.js
import React, { useState, useEffect } from 'react';
import taskService from '../services/taskService';
import { useDispatch } from 'react-redux';
import EditTaskForm from './EditTaskForm';
import DeleteTaskButton from './DeleteTaskButton';
import TaskSearch from './TaskSearch'; // Import the TaskSearch component
import './styles/TaskList.css';

function TaskList({ tasks }) {
  const [taskList, setTaskList] = useState([...tasks]);
  const [editTaskId, setEditTaskId] = useState(null);
  const dispatch = useDispatch();
  const [searchResults, setSearchResults] = useState(null); // State to store search results

  useEffect(() => {
    taskService
      .getTasks(dispatch)
      .then((response) => {
        if (response) {
          setTaskList(response);
        }
      })
      .catch((error) => {
        console.error('Error fetching tasks', error);
      });
  }, [dispatch, tasks]);

  const handleEditClick = (taskId) => {
    setEditTaskId(taskId);
  };

  const handleSearch = (searchQuery) => {
    // Make an API call to search tasks with the given query
    // Update the tasks state with the search results
    taskService
      .searchTasks(searchQuery, dispatch)
      .then((response) => {
        if (response) {
          setSearchResults(response);
        }
      })
      .catch((error) => {
        console.error('Error searching tasks', error);
      });
  };

  return (
    <div className="task-list-container">
      <h2>Task List</h2>
      <TaskSearch onSearch={handleSearch} />
      <ul className="task-list">
        {searchResults ? (
          // Display search results if available
          searchResults.map((task) => (
            <li key={task._id} className="task-item">
              <h3 className="task-title">{task.title}</h3>
              <p className="task-description">{task.description}</p>
              <p className="task-due-date">
                Due Date: {new Date(task.dueDate).toLocaleDateString()}
              </p>
              {editTaskId === task._id ? (
                <EditTaskForm task={task} updateEditedTask={updateEditedTask} />
              ) : (
                <div>
                  <button
                    onClick={() => handleEditClick(task._id)}
                    className="edit-button"
                  >
                    Edit
                  </button>
                </div>
              )}
              <br></br>
              <div>
                <DeleteTaskButton taskId={task._id} setTaskList={setTaskList} />
              </div>
            </li>
          ))
        ) : (
          // Display all tasks if no search is performed
          taskList.map((task) => (
            <li key={task._id} className="task-item">
              <h3 className="task-title">{task.title}</h3>
              <p className="task-description">{task.description}</p>
              <p className="task-due-date">
                Due Date: {new Date(task.dueDate).toLocaleDateString()}
              </p>
              {editTaskId === task._id ? (
                <EditTaskForm task={task} updateEditedTask={updateEditedTask} />
              ) : (
                <div>
                  <button
                    onClick={() => handleEditClick(task._id)}
                    className="edit-button"
                  >
                    Edit
                  </button>
                </div>
              )}
              <br></br>
              <div>
                <DeleteTaskButton taskId={task._id} setTaskList={setTaskList} />
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default TaskList;
