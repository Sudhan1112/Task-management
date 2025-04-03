import React, { useState, useEffect } from 'react';

const TaskModal = ({ task, onClose, onSave }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Work'); // Default category
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setCategory(task.category || 'Work');
    }
  }, [task]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    setIsSubmitting(true);
    await onSave({ title, description, category });
    setIsSubmitting(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md animate-fade-in">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          {task ? 'Edit Task' : 'New Task'}
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Title */}
          <label className="block mb-2">
            <span className="text-gray-700 font-medium">Title</span>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </label>

          {/* Description */}
          <label className="block mb-2">
            <span className="text-gray-700 font-medium">Description</span>
            <textarea
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>

          {/* Category Dropdown */}
          <label className="block mb-4">
            <span className="text-gray-700 font-medium">Category</span>
            <select
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Work">Work</option>
              <option value="Personal">Personal</option>
              <option value="Urgent">Urgent</option>
            </select>
          </label>

          {/* Buttons */}
          <div className="flex justify-end gap-2">
            <button
              type="button"
              className="px-4 py-2 text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300 transition"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Saving...' : 'Save Task'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskModal;