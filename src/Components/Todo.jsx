import React from 'react'
import TodoApp from './TodoApp'
import { FcTodoList } from 'react-icons/fc';

const Todo = () => {
    return (
        <div>
            <FcTodoList className='text-5xl font-bold'/>
            <TodoApp />
        </div>
    )
}

export default Todo