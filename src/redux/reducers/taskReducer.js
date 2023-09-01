const initialState = {
    tasks: [],
  };
  
  const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_TASKS_SUCCESS':
        return {
          ...state,
          tasks: action.payload,
        };
  
      case 'CREATE_TASK_SUCCESS':
        return {
          ...state,
          tasks: [...state.tasks, action.payload],
        };
  
      // Add other cases for updating or deleting tasks if needed
      case 'EDIT_TASK_SUCCESS':
        const updatedTaskIndex = state.tasks.findIndex(task => task._id === action.payload._id);
        const updatedTasks = [...state.tasks];
        updatedTasks[updatedTaskIndex] = action.payload;
        return {
          ...state,
          tasks: updatedTasks,
        };

        case 'DELETE_TASK_SUCCESS':
          const filteredTasks = state.tasks.filter(task => task._id !== action.payload);
          return {
            ...state,
            tasks: filteredTasks,
          };
      default:
        return state;
    }
  };
  
  export default taskReducer;
  