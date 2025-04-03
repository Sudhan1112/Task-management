import React from 'react';

const categoryColors = {
    Work: 'bg-blue-500',
    Personal: 'bg-green-500',
    Urgent: 'bg-red-500',
    other: 'bg-purple-500'
};

const Sidebar = ({ user, onLogout, onAddTask, selectedCategory, setSelectedCategory }) => {
    const categories = ['all', 'Work', 'Personal', 'Urgent', 'other'];

    return (
        <div className="w-64 bg-white shadow-lg">
            <div className="h-full flex flex-col">
                <div className="px-6 py-6 flex items-center justify-center border-b">
                    <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
                        TaskFlow
                    </h1>
                </div>

                <div className="p-4 border-b">
                    <div className="flex items-center">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 font-bold">
                            {user?.name?.charAt(0) || 'U'}
                        </div>
                        <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900">{user?.name || 'User'}</p>
                            <p className="text-xs text-gray-500 truncate">{user?.email || 'user@example.com'}</p>
                        </div>
                    </div>
                </div>

                <div className="p-4 flex-1">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                        Categories
                    </p>
                    <ul className="space-y-2">
                        {categories.map((category) => (
                            <li key={category}>
                                <button
                                    onClick={() => setSelectedCategory(category)}
                                    className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${selectedCategory === category
                                            ? 'bg-indigo-100 text-indigo-700'
                                            : 'text-gray-600 hover:bg-gray-100'
                                        }`}
                                >
                                    {category !== 'all' && (
                                        <span className={`w-3 h-3 rounded-full mr-2 ${categoryColors[category]}`}></span>
                                    )}
                                    {category === 'all' && (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                                        </svg>
                                    )}
                                    {category.charAt(0).toUpperCase() + category.slice(1)}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="p-4 border-t">
                    <button
                        onClick={onAddTask}
                        className="w-full flex items-center justify-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                        </svg>
                        New Task
                    </button>

                    <button
                        onClick={onLogout}
                        className="w-full flex items-center justify-center px-4 py-2 mt-2 text-indigo-600 bg-white border border-indigo-600 rounded-md hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V7.414l-5-5H3zm7 5a1 1 0 10-2 0v4.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L10 12.586V8z" clipRule="evenodd" />
                        </svg>
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
