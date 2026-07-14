import { configureStore } from '@reduxjs/toolkit';
import bookMarkReducer from './src/features/bookMarkSlice';

export const store = configureStore({
  reducer: {
    bookmark: bookMarkReducer,
     
  },
});