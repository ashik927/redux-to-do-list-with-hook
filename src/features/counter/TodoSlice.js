import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todoList : []
}

const TodoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        saveTodo : (state,action) => {
            state.todoList.push(action.payload)
        },
        setCheck : (state,action) => {
            state.todoList.map(item =>{
                if(item.id == action.payload){
                    if(item.done == true){
                        item.done = false
                    }
                    else{
                        item.done = true
                    }
                }
            })
        }
    }
});

export const {saveTodo,setCheck} = TodoSlice.actions
export const selectToDoList = state => state.todos.todoList

export default TodoSlice.reducer