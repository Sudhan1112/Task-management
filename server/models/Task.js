const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Link to user
  title: { type: String, required: true },
  description: { type: String },
  category: { type: String },
  status: { type: String, enum: ["pending", "completed"], default: "pending" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Task", TaskSchema);
