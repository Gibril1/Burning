import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./AuthService";

const user = localStorage.getItem('user')

const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}


export const register = createAsyncThunk('auth/register', async (user, thunkAPI) => {
    try {
        return await authService.registerUser(user)
    } catch (error) {
        const message = (error.response &&
            error.response.data &&
            error.response.data.message)||
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
    try {
        return await authService.loginUser(user)
    } catch (error) {
        const message = (error.response &&
            error.response.data &&
            error.response.data.message)||
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})


export const logout = createAsyncThunk('auth/logout', async () => {
    await authService.logoutUser()
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: (state) => {
        reset: (state) => {
            state.user = null
            state.isError = false
            state.isLoading = false
            state.isSuccess = false
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.isLoading = true
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.user = null
                state.isSuccess = false
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.message = ''
                state.user = action.payload
                state.isSuccess = true
            })
            .addCase(login.pending, (state) => {
                state.isLoading = true
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.user = null
                state.isSuccess = false
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.message = ''
                state.user = action.payload
                state.isSuccess = true
            })
            .addCase(logout.fulfilled, (state, action) => {
                state.user = null
            })
    }
})

export const { reset } = authSlice.actions
export default authSlice.reducer