import { configureStore } from '@reduxjs/toolkit';
import TodoReducer from '../features/counter/TodoSlice';

export default configureStore({
  reducer: {
    todos:TodoReducer
  },
});
