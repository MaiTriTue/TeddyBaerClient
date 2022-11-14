import { createSlice } from '@reduxjs/toolkit';
// import type, { PayloadAction } from '@reduxjs/toolkit'

const CartPageSlice = createSlice({
    name: 'cartPage',
    initialState: localStorage.getItem('cartProduct') ? JSON.parse(localStorage.getItem('cartProduct')) : [],

    reducers: {
        addCart: (state, action) => {
            state.push(action.payload);
        },

        changeCountProduct: (state, action) => {
            return action.payload;
        },
    },
});

const { reducer, actions } = CartPageSlice;
export const { addCart, changeCountProduct, addCountProduct, changeCartProduct } = actions;
export default reducer;
