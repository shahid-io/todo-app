import React from 'react'
import TodoApp from './TodoApp'
import { FcTodoList } from 'react-icons/fc';

const Todo = () => {
    return (
        <div>
            <div className='flex items-center justify-between'>
                <FcTodoList className='text-5xl font-bold' />
                <h1 className='text-3xl font-bold text-gray-500'>Todo App</h1>
            </div>
            <TodoApp />
        </div>
    )
}

export default Todo