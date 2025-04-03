const Task = require("../models/Task");

// ✅ Create Task
exports.createTask = async (req, res) => {
  try {
    const { title, description, category } = req.body;
    const newTask = new Task({ user: req.user.userId, title, description,category });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// ✅ Get All Tasks for Logged-in User
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.userId }).sort({ createdAt: -1 });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// ✅ Update Task
exports.updateTask = async (req, res) => {
  try {
    const { title, description, status } = req.body;
    const updatedTask = await Task.findOneAndUpdate(
      { _id: req.params.id, user: req.user.userId }, // Ensure user owns the task
      { title, description, status },
      { new: true }
    );

    if (!updatedTask) return res.status(404).json({ message: "Task not found" });

    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// ✅ Delete Task
exports.deleteTask = async (req, res) => {
  try {
    const deletedTask = await Task.findOneAndDelete({ _id: req.params.id, user: req.user.userId });

    if (!deletedTask) return res.status(404).json({ message: "Task not found" });

    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};
