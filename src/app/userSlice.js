import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from '~/Apis/userApi';
// import type, { PayloadAction } from '@reduxjs/toolkit'

export const getUser = createAsyncThunk('user/getUser', async (params, thunkAPI) => {
    // dispatch action moi
    // thunkAPI.dispatch(...)

    const currentUser = await userApi.login(params);

    return currentUser.data;
});

let currentData = localStorage.getItem('teddybearbeautyful-ui::rememberedAccounts')
    ? JSON.parse(localStorage.getItem('teddybearbeautyful-ui::rememberedAccounts'))
    : '';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        current: currentData,
        loading: false,
        error: '',
    },
    reducers: {
        Logout: (state, action) => {
            state.current = action.payload;
            return state;
        },
        updateInfoLike: (state, action) => {
            state.current = action.payload;
            return state;
        },
    },

    extraReducers: (builder) => {
        // Thêm bộ giảm tốc cho các loại hành động bổ sung tại đây và xử lý trạng thái tải khi cần
        builder.addCase(getUser.pending, (state) => {
            // Thêm người dùng vào mảng trạng thái
            state.loading = true;
        });
        builder.addCase(getUser.rejected, (state, action) => {
            // Thêm người dùng vào mảng trạng thái
            state.loading = false;
            state.error = action.error;
        });
        builder.addCase(getUser.fulfilled, (state, action) => {
            // Thêm người dùng vào mảng trạng thái
            state.loading = false;
            state.current = action.payload;
        });
    },
});

const { reducer: userReducer, actions } = userSlice;
export const { Logout, updateInfoLike } = actions;
export default userReducer;
