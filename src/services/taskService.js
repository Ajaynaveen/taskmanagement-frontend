import instance from './instance';

const getTasks = async (dispatch) => {
  try {
    const response = await instance.protectedInstance.get('/tasks');
    if (response.status === 200) {

      console.log('Fetching tasks successful');
      dispatch({
        type: 'FETCH_TASKS_SUCCESS',
        payload: response.data,
      });
      return response.data;
    } else {
      console.log('Fetching tasks failed');
      return null;
    }
  } catch (error) {
    console.error('Error fetching tasks', error);
    return null;
  }
};

const createTask = async (dispatch,newTask) => {
  try {
    const response = await instance.protectedInstance.post('/tasks', newTask);
    if (response.status === 201) {
      console.log('Task created successfully');
      dispatch({
        type: 'CREATE_TASK_SUCCESS',
        payload: response.data,
      });
      return response.data;
    } else {
      console.log('Task creation failed');
      return false;
    }
  } catch (error) {
    console.error('Error creating task', error);
    return false;
  }
};

const editTask = async (dispatch,taskId, updatedTask) => {
  try {
    const response = await instance.protectedInstance.put(`/tasks/${taskId}`, updatedTask);
    if (response.status === 200) {
      console.log('Task updated successfully');
      dispatch({
        type: 'EDIT_TASK_SUCCESS',
        payload: response,
      });
      return response.data;
    } else {
      console.log('Task update failed');
      return null;
    }
  } catch (error) {
    console.error('Error updating task', error);
    return null;
  }
};
const deleteTask = async (dispatch, taskId) => {
  try {
    const response = await instance.protectedInstance.delete(`/tasks/${taskId}`);
    if (response.status === 200) {
      console.log('Task deleted successfully');
      return true;
    } else {
      console.log('Task deletion failed');
      return false;
    }
  } catch (error) {
    console.error('Error deleting task', error);
    return false;
  }
};







export default {
  getTasks,
  createTask,
 
  editTask,
  deleteTask
 
};
