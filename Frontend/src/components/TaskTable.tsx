import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectTodos } from '../store/todosSlice';

const TaskTable: React.FC = () => {
    const { todos, loading, error } = useSelector(selectTodos);
    const [currentPage, setCurrentPage] = useState(1);
    const tasksPerPage = 5;

    if (loading) return <p className="text-center text-gray-500">Loading...</p>;
    if (error) return <p className="text-center text-red-500">Error: {error}</p>;

    const startIndex = (currentPage - 1) * tasksPerPage;
    const paginatedTasks = todos.slice(startIndex, startIndex + tasksPerPage);
    const totalPages = Math.ceil(todos.length / tasksPerPage);

    const handlePreviousPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 text-center">Task Manager</h1>

            {todos && todos.length > 0 ? (
                <div className="space-y-4">
                    {paginatedTasks.map((task) => (
                        <div
                            key={task.id}
                            className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow"
                        >
                            <h2 className="text-lg font-semibold">{task.title}</h2>
                            <p className="text-gray-700">{task.description || 'No description provided'}</p>
                            <span
                                className={`inline-block mt-2 px-3 py-1 text-sm font-medium rounded ${
                                    task.completed
                                        ? 'bg-green-100 text-green-700'
                                        : 'bg-yellow-100 text-yellow-700'
                                }`}
                            >
                                {task.completed ? 'Completed' : 'Pending'}
                            </span>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500">No tasks found.</p>
            )}

            <div className="flex justify-between items-center mt-6">
                <button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
                >
                    Previous
                </button>
                <span className="text-gray-700">
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default TaskTable;
