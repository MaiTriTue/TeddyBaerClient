import { configureStore } from '@reduxjs/toolkit';
import photoReducer from '../pages/Home/HomeSlice';

const rootReducer = {
    photos: photoReducer,
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;
