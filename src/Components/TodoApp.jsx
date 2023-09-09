    import React, { useEffect } from 'react';
    import { v4 as uuid } from 'uuid';
    import TodoList from './TodoList';
    import Form from './Form';
    import todoData from '../todo.json';

    const TodoApp = () => {
        const [todo, setTodo] = React.useState([]);

        useEffect(() => {
            console.log(todoData);
            setTodo(todoData);
        }, []);

        const addTodo = (newTodo) => {
            setTodo([...todo, newTodo]);
        }

        const deleteTodo = (id) => {
            setTodo((prevState) => {
                return prevState.filter((todo) => todo.id !== id)
            });
        }

        const checkTodo = (id) => {
            setTodo((prevState) => {
                return prevState.map((item) => item.id === id ? { ...item, completed: !item.completed } : item)
            });
        }

        return (
            <div className='TodoApp'>
                <Form addTodo={addTodo} />
                <TodoList todo={todo} deleteTodo={deleteTodo} checkTodo={checkTodo} />
            </div>
        )
    }

    export default TodoApp;
