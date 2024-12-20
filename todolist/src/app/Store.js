import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../slices/TodoSlice';

export const Store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
