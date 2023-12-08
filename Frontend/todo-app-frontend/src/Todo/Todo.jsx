import React from 'react';
import TodoList from './TodoLists/TodoList';

const Todo = () => {
    return (
        <div className="w-5/6 flex flex-col justify-center items-center m-auto">

            {/* Todo Title */}
            <h1 className="text-3xl font-bold ">
                Todo App
            </h1>
            {/* Todo Input Control*/}
            <div className="mt-4 flex items-end p-12 border-2 rounded-lg shadow-lg">
                <div className='m-2 flex flex-col items-start'>
                    <label htmlFor="todo" className="block mt-2">Todo</label>
                    <input type="text" name="todo" id="todo" className="border border-gray-300 rounded-md px-2 py-1" />
                </div>
                <div className='m-2 flex flex-col items-start'>
                    <label htmlFor="description" className="block mt-2">Description</label>
                    <input type="text" name="description" id="description" className="border border-gray-300 rounded-md px-2 py-1" />
                </div>
                <div className='m-2 flex flex-col items-start'>
                    <label htmlFor="deadline" className="block mt-2">Deadline</label>
                    <input type="date" min={new Date().toISOString().split('T')[0]} name="deadline" id="deadline" className="border border-gray-300 rounded-md px-2 py-1" />
                </div>
                <div className='m-2'>
                    <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                        Add Todo
                    </button>
                </div>
            </div>

            {/* Todo Lists */}
            <TodoList />
        </div>
    );
}

export default Todo;
