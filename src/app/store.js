import { configureStore } from '@reduxjs/toolkit';
import sizeReducer from '../pages/Home/HomeSlice';
import registerReducer from '../pages/Register/RegisterSlice';

const rootReducer = {
    size: sizeReducer,
    register: registerReducer,
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;
