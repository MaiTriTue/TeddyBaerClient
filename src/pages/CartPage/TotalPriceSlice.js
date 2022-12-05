import { createSlice } from '@reduxjs/toolkit';
// import type, { PayloadAction } from '@reduxjs/toolkit'

const TotalPriceSlice = createSlice({
    name: 'totalprice',
    initialState: 0,

    reducers: {
        changeTotalPrice: (state, action) => {
            return action.payload;
        },
    },
});

const { reducer, actions } = TotalPriceSlice;
export const { changeTotalPrice } = actions;
export default reducer;
