import { createSlice } from '@reduxjs/toolkit';
// import type, { PayloadAction } from '@reduxjs/toolkit'

const HomeSlice = createSlice({
    name: 'photos',
    initialState: {
        width: 0,
        height: 0,
    },
    reducers: {
        addWidth: (state, action) => {
            console.log(state, '  ', action.payload);
            state.width = action.payload;
            console.log('kq: ', state);
            return state;
        },
        addHeight: (state, action) => {
            console.log(state, '  ', action.payload);
            state.height = action.payload;
            console.log('kq: ', state);
            return state;
        },
    },
});

const { reducer, actions } = HomeSlice;
export const { addWidth, addHeight } = actions;
export default reducer;
