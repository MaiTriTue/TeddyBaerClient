import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getMonth, getYear } from 'date-fns';
import userApi from '~/Apis/userApi';
import range from 'lodash/range';
// import type, { PayloadAction } from '@reduxjs/toolkit'

export const registerUser = createAsyncThunk('user/registerUser', async (params, thunkAPI) => {
    // dispatch action moi
    // thunkAPI.dispatch(...)

    const currentUser = await userApi.register(params);

    return currentUser.data;
});

const years = range(1900, getYear(new Date()) + 1, 1);

let yearOptions = [];
years.forEach((item, index) => {
    yearOptions.push({ value: item.toString(), label: item.toString() });
});

const RegisterSlice = createSlice({
    name: 'register',
    initialState: {
        year: yearOptions,
        current: '',
        loading: false,
        error: '',
    },
    reducers: {},
    extraReducers: (builder) => {
        // Thêm bộ giảm tốc cho các loại hành động bổ sung tại đây và xử lý trạng thái tải khi cần
        builder.addCase(registerUser.pending, (state) => {
            // Thêm người dùng vào mảng trạng thái
            state.loading = true;
        });
        builder.addCase(registerUser.rejected, (state, action) => {
            // Thêm người dùng vào mảng trạng thái
            state.loading = false;
            state.error = action.error;
        });
        builder.addCase(registerUser.fulfilled, (state, action) => {
            // Thêm người dùng vào mảng trạng thái
            state.loading = false;
            state.current = action.payload;
        });
    },
});

const { reducer, actions } = RegisterSlice;
// export const {} = actions;
export default reducer;
