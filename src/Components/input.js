import React, { useState } from 'react';
import './Input.css';
import { saveTodo } from '../features/counter/TodoSlice';
import { useDispatch } from 'react-redux';
const Input = () => {
    const [input , setInput] = useState('');
    const dispatch = useDispatch();
    const addtodo = () =>{
        console.log(`adding ${input}`)
        dispatch(saveTodo({
            item: input,
            done:false,
            id:Date.now()
        }))
    }
    return (
        <div>
            <div className="input">
                <input type="text" placeholder="Please Input Your Task" value={input} onChange={e => setInput(e.target.value)}/>
                <button onClick={addtodo}>add</button>
            </div>
        </div>
    );
};

export default Input;