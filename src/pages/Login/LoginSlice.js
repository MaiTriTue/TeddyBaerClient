import { createSlice } from '@reduxjs/toolkit';
// import type, { PayloadAction } from '@reduxjs/toolkit'

const LoginSlice = createSlice({
    name: 'login',
    initialState: false,
    reducers: {
        ChangeWarningLogin: (state, action) => {
            return action.payload;
        },
    },
});

const { reducer, actions } = LoginSlice;
export const { ChangeWarningLogin } = actions;
export default reducer;
