import React from 'react';
import TaskCard from './TaskCard';

const TaskList = ({ tasks, isLoading, onEdit, onDelete, onToggleCompletion }) => {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow p-6 h-64">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
        <h3 className="mt-4 text-lg font-medium text-gray-900">No tasks found</h3>
        <p className="mt-1 text-sm text-gray-500">Get started by creating a new task.</p>
      </div>
    );
  }

  return (

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      { tasks.map((task) => (
        <TaskCard
          key={task._id}
          task={task}
          onEdit={() => onEdit(task)}
          onDelete={() => onDelete(task._id)}
          onToggleCompletion={() => onToggleCompletion(task._id)}
        />
      ))}
    </div>
  );
};

export default TaskList;
