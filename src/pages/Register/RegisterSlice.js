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
        checkFirstNameValid: false,
        checkLastNameValid: false,
        checkEmailValid: false,
        checkUserValid: false,
        checkPassValid: false,
        checkRePassValid: false,
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
        setCheckFirstNameValid: (state, action) => {
            state.checkFirstNameValid = action.payload;
            return state;
        },
        setCheckLastNameValid: (state, action) => {
            state.checkLastNameValid = action.payload;
            return state;
        },
        setCheckEmailValid: (state, action) => {
            state.checkEmailValid = action.payload;
            return state;
        },
        setCheckUserValid: (state, action) => {
            state.checkUserValid = action.payload;
            return state;
        },
        setCheckPassValid: (state, action) => {
            state.checkPassValid = action.payload;
            return state;
        },
        setCheckRePassValid: (state, action) => {
            state.checkRePassValid = action.payload;
            return state;
        },
    },
});

const { reducer, actions } = HomeSlice;
export const {
    addLastName,
    addFirstName,
    addEmail,
    addUserName,
    addPassword,
    setCheckFirstNameValid,
    setCheckLastNameValid,
    setCheckEmailValid,
    setCheckUserValid,
    setCheckPassValid,
    setCheckRePassValid,
} = actions;
export default reducer;
