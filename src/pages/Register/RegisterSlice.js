import { createSlice } from '@reduxjs/toolkit';
// import type, { PayloadAction } from '@reduxjs/toolkit'

const HomeSlice = createSlice({
    name: 'register',
    initialState: {
        lastName: '',
        firstName: '',
        email: '',
        userName: '',
        password: '',
        rePassword: '',
        birthday: '',
    },
    reducers: {
        addLastName: (state, action) => {
            state.lastName = action.payload;
            return state;
        },
        addFirstName: (state, action) => {
            state.firstName = action.payload;
            return state;
        },
        addEmail: (state, action) => {
            state.email = action.payload;
            return state;
        },
        addUserName: (state, action) => {
            state.userName = action.payload;
            return state;
        },
        addPassword: (state, action) => {
            state.password = action.payload;
            return state;
        },
        addRePassword: (state, action) => {
            state.rePassword = action.payload;
            return state;
        },
        addBirthday: (state, action) => {
            state.birthday = action.payload;
            return state;
        },
    },
});

const { reducer, actions } = HomeSlice;
export const { addLastName, addFirstName, addEmail, addUserName, addPassword, addRePassword, addBirthday } = actions;
export default reducer;
