import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../context/AuthContext';
import { getTasks, createTask, updateTask, deleteTask, toggleTaskCompletion } from '../services/taskService';
import TaskList from '../components/TaskList';
import TaskModal from '../components/TaskModal';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
    const [tasks, setTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [currentTask, setCurrentTask] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            setIsLoading(true);
            const data = await getTasks();
            setTasks(data);
            console.log('Fetched tasks:', data);    
        } catch (error) {
            toast.error('Failed to fetch tasks');
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleLogout = async () => {
        const result = await logout();
        if (result.success) {
            toast.success('Logged out successfully');
            navigate('/login');
        } else {
            toast.error(result.message);
        }
    };

    const handleAddTask = () => {
        setCurrentTask(null);
        setShowModal(true);
    };

    const handleEditTask = (task) => {
        setCurrentTask(task);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setCurrentTask(null);
    };

    const handleSaveTask = async (taskData) => {
        try {
            let updatedTasks;

            if (currentTask) {
                // Update existing task
                const updatedTask = await updateTask(currentTask._id, taskData);
                updatedTasks = tasks.map(task =>
                    task._id === currentTask._id ? updatedTask : task
                );
                toast.success('Task updated successfully');
            } else {
                // Create new task
                const newTask = await createTask(taskData);
                updatedTasks = [...tasks, newTask];
                toast.success('Task created successfully');
            }

            setTasks(updatedTasks);
            setShowModal(false);
        } catch (error) {
            toast.error(currentTask ? 'Failed to update task' : 'Failed to create task');
        }
    };

    const handleDeleteTask = async (id) => {
        try {
            await deleteTask(id);
            setTasks(tasks.filter(task => task._id !== id));
            toast.success('Task deleted successfully');
        } catch (error) {
            toast.error('Failed to delete task');
        }
    };

    const handleToggleCompletion = async (id, completed) => {
        try {
            const updatedTask = await toggleTaskCompletion(id, !completed);
            setTasks(tasks.map(task =>
                task._id === id ? { ...task, completed: updatedTask.completed } : task
            ));
            toast.success(updatedTask.completed ? 'Task marked as completed' : 'Task marked as pending');
        } catch (error) {
            toast.error('Failed to update task status');
        }
    };

    const filteredTasks = selectedCategory === 'all'
        ? tasks
        : tasks.filter(task => task.category === selectedCategory);

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar
                user={currentUser}
                onLogout={handleLogout}
                onAddTask={handleAddTask}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />

            <div className="flex-1 overflow-x-hidden overflow-y-auto">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-3xl font-bold text-gray-800">
                            {selectedCategory === 'all' ? 'All Tasks' : `${selectedCategory} Tasks`}
                        </h1>
                        <button
                            onClick={handleAddTask}
                            className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                            </svg>
                            Add Task
                        </button>
                    </div>
                    
                    <TaskList
                        tasks={filteredTasks}
                        isLoading={isLoading}
                        onEdit={handleEditTask}
                        onDelete={handleDeleteTask}
                        onToggleCompletion={handleToggleCompletion}
                    />
                </div>
            </div>

            {showModal && (
                <TaskModal
                    task={currentTask}
                    onClose={handleCloseModal}
                    onSave={handleSaveTask}
                />
            )}
        </div>
    );
};

export default Dashboard;