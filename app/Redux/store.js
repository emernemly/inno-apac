import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slice';
import blogReducer from './blogslice';
import contactReducer from './contactSlice';
import newsLetterReducer from './NewsLetterSlice';
const store = configureStore({
  reducer: {
    user: userReducer,
    blog: blogReducer,
    contact: contactReducer,
    newsLetter: newsLetterReducer,
    devTools: process.env.NODE_ENV !== 'production',
  },
});

export default store;
