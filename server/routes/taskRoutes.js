const express = require("express");
const { createTask, getTasks, updateTask, deleteTask } = require("../controllers/taskController");

const router = express.Router();

router.post("/tasks", createTask);     // Create Task
router.get("/tasks", getTasks);       // Get User's Tasks
router.put("/tasks/:id", updateTask); // Update Task
router.delete("/tasks/:id", deleteTask); // Delete Task

module.exports = router;
