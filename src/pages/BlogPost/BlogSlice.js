import { createSlice } from '@reduxjs/toolkit';
// import type, { PayloadAction } from '@reduxjs/toolkit'

const HomeSlice = createSlice({
    name: 'photos',
    initialState: {
        width: 0,
        height: 0,
        widthScreen: 0,
        cartProduct: [],
    },
    reducers: {
        addWidth: (state, action) => {
            state.width = action.payload;

            return state;
        },
        addHeight: (state, action) => {
            state.height = action.payload;

            return state;
        },
        setWidthScreen: (state, action) => {
            state.widthScreen = action.payload;

            return state;
        },
        setCartProduct: (state, action) => {
            state.cartProduct.push(action.payload);

            return state;
        },
    },
});

const { reducer, actions } = HomeSlice;
export const { addWidth, addHeight, setWidthScreen, setCartProduct } = actions;
export default reducer;
