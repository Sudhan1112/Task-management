# 🚀 Task Manager App

A full-stack task management application with JWT authentication. Create, organize, and track your tasks efficiently with a clean and responsive interface.

## 📋 Table of Contents
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [Running Locally](#-running-locally)
- [API Endpoints](#-api-endpoints)
- [Future Enhancements](#-future-enhancements)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features
- 🔒 **JWT Authentication**: Secure user signup/login/logout
- 📝 **CRUD Operations**: Create, read, update, and delete tasks
- 📱 **Responsive UI**: Built with Tailwind CSS
- 🔄 **Real-Time Updates**: Instant task list refresh
- 🛡 **Protected Routes**: Auth-guarded endpoints
- 📦 **Database Persistence**: MongoDB Atlas integration

---

## 💻 Tech Stack

### Frontend
- **React**  
- **Tailwind CSS**  
- **Axios**  
- **React Context API**

### Backend
- **Node.js**  
- **Express**  
- **MongoDB**  
- **Mongoose**  
- **JWT**

### Deployment
- **Vercel** (Frontend)  https://task-management-khaki-kappa.vercel.app
- **Render** (Backend)  https://task-management-r2sg.onrender.com

---

## 🏗 Architecture
**MVC Pattern Implementation**

| Layer       | Components                          |
|-------------|-------------------------------------|
| **Frontend**| React Components, Context API       |
| **Backend** | Express Routes, Controllers, Models |
| **Database**| MongoDB Collections                 |

---

## 📁 Project Structure
```
task-manager/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── TaskCard.jsx  # Individual task display
│   │   │   ├── TaskList.jsx  # Task collection
│   │   │   └── TaskModal.jsx # Create/Edit form
│   │   ├── context/
│   │   │   └── AuthContext.jsx  # Authentication state
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx  # Main task view
│   │   │   ├── Login.jsx  # Auth page
│   │   │   └── Register.jsx  # User registration
│   │   ├── services/
│   │   │   └── api.js  # Axios instance
│   │   └── App.jsx  # Root component
│
├── server/
│   ├── config/
│   │   └── db.js  # Database connection
│   ├── controllers/
│   │   ├── authController.js  # Auth logic
│   │   └── taskController.js  # Task CRUD operations
│   ├── middleware/
│   │   └── authMiddleware.js  # JWT verification
│   ├── models/
│   │   ├── Task.js  # Task schema
│   │   └── User.js  # User schema
│   ├── routes/
│   │   ├── authRoutes.js  # Auth endpoints
│   │   └── taskRoutes.js  # Task endpoints
│   └── server.js  # Entry point
```

---

## 📦 Installation

### Frontend
```bash
cd client
npm install
```

### Backend
```bash
cd server
npm install
```

---

## 🔐 Environment Variables

### Client (`.env`)
```env
VITE_API_URL=http://localhost:5000/api
```

### Server (`.env`)
```env
MONGODB_URI=your_mongodb_atlas_uri
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

---

## ⚡ Running Locally

### Start Backend
```bash
cd server
npm start
# Running on http://localhost:5000
```

### Start Frontend
```bash
cd client
npm run dev
# Running on http://localhost:5173
```

---

## 🔌 API Endpoints

| Method | Endpoint             | Description          |
|--------|----------------------|----------------------|
| POST   | /api/auth/signup     | Register new user   |
| POST   | /api/auth/login      | User login          |
| POST   | /api/auth/logout     | User logout         |
| GET    | /api/auth/me         | Get current user    |
| POST   | /api/tasks           | Create new task     |
| GET    | /api/tasks           | Get all user's tasks|
| PUT    | /api/tasks/:id       | Update specific task|
| DELETE | /api/tasks/:id       | Delete specific task|

---

## 🚀 Future Enhancements
- 🏷 Task categories (Work/Personal/Urgent)
- ✅ Mark tasks as complete
- 📅 Due dates and reminders
- 🔍 Search/filter functionality
- 📊 Task statistics dashboard

---

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/awesome-feature`
3. Commit changes: `git commit -m 'Add awesome feature'`
4. Push to branch: `git push origin feature/awesome-feature`
5. Open a Pull Request

---
