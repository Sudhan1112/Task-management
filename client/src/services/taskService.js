import axios from 'axios';

const API_URL = 'http://localhost:8000/api/tasks';

// Configure axios with credentials
axios.defaults.withCredentials = true;

export const getTasks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createTask = async (taskData) => {
  console.log(taskData)
  try {
    const response = await axios.post(API_URL, taskData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateTask = async (id, taskData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, taskData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteTask = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const toggleTaskCompletion = async (id, completed) => {
  try {
    const response = await axios.patch(`${API_URL}/${id}/complete`, { completed });
    return response.data;
  } catch (error) {
    throw error;
  }
};