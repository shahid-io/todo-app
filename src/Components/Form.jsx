import React from 'react';
import { GoPencil } from 'react-icons/go';
import { GrAdd } from 'react-icons/gr';
import { v4 as uuid } from 'uuid';

const Form = (props) => {


    let [input, setInput] = React.useState('');

    function inputChangeHandler(e) {
        setInput(e.target.value);
    }

    function formSubmitHandler(e) {
        e.preventDefault();
        console.log(input);
        const newTodo = {
            id: uuid(),
            todo: input,
            completed: false
        }
        console.log(newTodo);
        props.addTodo(newTodo);
        setInput('');
    }

    return (
        <form className="mb-4 p-4 bg-gray-100" onSubmit={formSubmitHandler}>
            <div className="mb-4 flex items-center">
                <label htmlFor="todo" className="block text-gray-700 font-bold mr-2">
                    <GoPencil className='text-2xl font-bold' />
                </label>
                <input
                    type="text"
                    onChange={inputChangeHandler}
                    value={input}
                    className="flex-grow shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter Todo"
                />
            </div>

            <button type="submit" className="bg-gray-500 hover:bg-green-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform hover:scale-110 transition duration-300" onClick={formSubmitHandler}>
                <GrAdd />
            </button>
        </form>
    )
}

export default Form;
