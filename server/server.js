require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes"); 

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" || "https://task-management-r2sg.onrender.com", credentials: true }));
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api", taskRoutes); // 👈 Use Task Routes

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
