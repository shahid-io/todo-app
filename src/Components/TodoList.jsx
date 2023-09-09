import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { FiCheckSquare } from 'react-icons/fi';

const TodoList = (props) => {
    const { todo, deleteTodo, checkTodo } = props;

    function handleCheckboxChange(id) {
        console.log(id);
    }

    return (
        <div className='todoList bg-gray-100 p-4'>
            {todo.map((todo) => (
                <div key={todo.id} className={`sub-container bg-white shadow-lg p-4 md:p-6 mb-4 rounded-lg ${todo.completed ? 'opacity-50' : ''}`}>
                    <p className='text-xs font-bold text-gray-800 mb-2'>{todo.id}</p>
                    <h1 className='text-xl font-bold text-gray-800 mb-2'>{todo.title}</h1>
                    <h2 className='text-gray-600 mb-4'>{todo.completed ? 'Completed' : 'Incomplete'}</h2>
                    <label className="flex items-center">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                onChange={() => handleCheckboxChange(todo.id)}
                                className="mr-2 h-5 w-5 text-blue-500"
                                checked={todo.completed}
                                hidden
                            />
                            <div onClick={() => checkTodo(todo.id)} className="text-blue-500 hover:text-blue-700 transform hover:scale-110 transition duration-300">
                                <FiCheckSquare className="text-2xl" />
                            </div>
                        </div>
                    </label>
                    <button onClick={() => deleteTodo(todo.id)} className='bg-yellow-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2 md:mt-0'>
                        <AiOutlineDelete />
                    </button>
                </div>
            ))}
        </div>
    )
}

export default TodoList;
