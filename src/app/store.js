import { configureStore } from '@reduxjs/toolkit';
import sizeReducer from '../pages/Home/HomeSlice';
import cartPageReducer from '../pages/CartPage/CartPageSlice';
import registerReducer from '../pages/Register/RegisterSlice';

const rootReducer = {
    size: sizeReducer,
    register: registerReducer,
    cartPage: cartPageReducer,
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;
