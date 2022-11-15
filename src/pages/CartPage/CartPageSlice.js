import { createSlice } from '@reduxjs/toolkit';
// import type, { PayloadAction } from '@reduxjs/toolkit'

let cartProduct = localStorage.getItem('cartProduct') ? JSON.parse(localStorage.getItem('cartProduct')) : [];

const CartPageSlice = createSlice({
    name: 'cartPage',
    initialState: cartProduct,

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
export const { addCart, changeCountProduct } = actions;
export default reducer;
