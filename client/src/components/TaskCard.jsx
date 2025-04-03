import React from 'react';

const categoryColors = {
  Work: 'border-blue-500',
  Personal: 'border-green-500',
  Urgent: 'border-red-500',
  Other: 'border-yellow-500',
  Default: 'border-gray-500', // Fallback for unlisted categories
};

const TaskCard = ({ task, onEdit, onDelete, onToggleCompletion }) => {
  const borderColor = categoryColors[task.category] || categoryColors.Default;

  return (
    <div className={`bg-white rounded-lg shadow-md p-5 transition-all hover:shadow-lg border-l-4 ${borderColor}`}>
      {/* Task Title & Status */}
      <div className="flex justify-between items-center mb-3">
        <h3 className={`text-lg font-semibold ${task.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}>
          {task.title}
        </h3>
        <button
          onClick={onToggleCompletion}
          className={`px-3 py-1 text-sm font-medium rounded ${
            task.completed ? 'bg-green-200 text-green-700' : 'bg-gray-200 text-gray-700'
          } hover:opacity-75 transition`}
        >
          {task.completed ? 'Completed' : 'Pending'}
        </button>
      </div>

      {/* Task Description */}
      <p className="text-gray-600 text-sm mb-4">{task.description || 'No description provided.'}</p>

      {/* Action Buttons */}
      <div className="flex justify-between items-center">
        <span className="text-xs text-gray-500">Category: {task.category || 'General'}</span>
        <div className="flex gap-2">
          <button
            onClick={onEdit}
            className="text-indigo-600 hover:text-indigo-800 transition"
          >
            ✏️ Edit
          </button>
          <button
            onClick={onDelete}
            className="text-red-600 hover:text-red-800 transition"
          >
            🗑️ Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
