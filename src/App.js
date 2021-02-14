import React from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './Components/input';
import TodoItem from './Components/TodoItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectToDoList } from './features/counter/TodoSlice';

// const todolist = [
//   {
//     item: 'hey',
//     done: false,
//     id: 1613331110418
//   },
//   {
//     item: 'heyy',
//     done: true,
//     id: 1613331110419
//   },
//   {
//     item: 'hey',
//     done: true,
//     id: 1613331110420
//   }
// ]
function App() {
const todolist = useSelector(selectToDoList);
  return (
    <div className="app">
      <div className="app__container">
        <div className="app__todoContainer">
          {
            todolist.map(item =>(<TodoItem item={item}></TodoItem>))
          }
        </div>
        <Input></Input>
      </div>

    </div>
  );
}

export default App;
