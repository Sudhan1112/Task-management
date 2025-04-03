import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/api",
  withCredentials: true, 
});

// Register User
export const register = (userData) => API.post("/auth/signup", userData);

// Login User
export const login = (userData) => API.post("/auth/login", userData);

// Fetch Tasks
export const fetchTasks = () => API.get("/tasks");

// Create Task
export const createTask = (taskData) => API.post("/tasks", taskData);

// Update Task
export const updateTask = (taskId, updatedData) => API.put(`/tasks/${taskId}`, updatedData);

// Delete Task
export const deleteTask = (taskId) => API.delete(`/tasks/${taskId}`);
