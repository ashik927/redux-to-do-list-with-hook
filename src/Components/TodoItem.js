import React from 'react';
import './TodoItem.css';
import Checkbox from '@material-ui/core/Checkbox';
import { useDispatch } from 'react-redux';
import { setCheck } from '../features/counter/TodoSlice';
const TodoItem = (props) => {
    const {item,done,id} = props.item;
    const dispatch = useDispatch();
    const handleChange = () =>{
        dispatch(setCheck(id))
    }
    return (
        <div className="todoItem">
            <Checkbox
                checked={done}
                color='primary'
                onChange={handleChange}
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
            <p className={done && 'todoItem--done'}>{ item}</p>
        </div>
    );
};

export default TodoItem;