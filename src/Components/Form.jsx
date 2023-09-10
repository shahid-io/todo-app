import React from 'react';
import { MdPostAdd } from 'react-icons/md';
import { v4 as uuid } from 'uuid';

const Form = (props) => {


    let [input, setInput] = React.useState('');
    const [inputError, setInputError] = React.useState(false);

    function inputChangeHandler(e) {
        setInput(e.target.value);
        setInputError(false);
    }

    function formSubmitHandler(e) {
        e.preventDefault();
        if (input.trim() === '') {
            setInputError(true);
            return;
        }
        console.log(input);
        const newTodo = {
            id: uuid(),
            title: input,
            completed: false
        }
        console.log(newTodo);
        props.addTodo(newTodo);
        setInput('');
    }

    return (
        <form className="mb-4 p-4 bg-gray-100" onSubmit={formSubmitHandler}>
            <div className="mb-4 flex items-center justify-center">
                <input
                    type="text"
                    onChange={inputChangeHandler}
                    value={input}
                    className={`mb-4 flex items-center flex-grow shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${inputError ? 'border-red-500' : ''}`}
                    placeholder="Enter Todo"
                />
            </div>

            <div className='flex items-center justify-center'>
                <button
                    type="submit"
                    className="
                        flex
                        items-center
                        justify-center
                        hover:bg-gray-500 
                        hover:text-white 
                        font-bold 
                        py-2 px-4 
                        rounded 
                        focus:outline-none 
                        focus:shadow-outline 
                        transform hover:scale-110 transition duration-300 
                        text-3xl 
                        w-full" onClick={formSubmitHandler}>
                    <MdPostAdd />
                </button>
            </div>
        </form>
    )
}

export default Form;
