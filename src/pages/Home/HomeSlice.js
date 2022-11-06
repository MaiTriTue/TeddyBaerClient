import { createSlice } from '@reduxjs/toolkit';
// import type, { PayloadAction } from '@reduxjs/toolkit'

const HomeSlice = createSlice({
    name: 'photos',
    initialState: 0,
    reducers: {
        addPhoto: (state, action) => {
            state = action.payload;
        },
    },
});

const { reducer, actions } = HomeSlice;
export const { addPhoto } = actions;
export default reducer;
