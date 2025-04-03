const express = require("express");
const { authMiddleware } = require("../middleware/authMiddleware");
const { createTask, getTasks, updateTask, deleteTask } = require("../controllers/taskController");

const router = express.Router();

router.post("/tasks", authMiddleware, createTask);     // Create Task
router.get("/tasks", authMiddleware, getTasks);       // Get User's Tasks
router.put("/tasks/:id", authMiddleware, updateTask); // Update Task
router.delete("/tasks/:id", authMiddleware, deleteTask); // Delete Task

module.exports = router;
