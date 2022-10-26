import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./AuthService";


const user = JSON.parse(localStorage.getItem("user"))
const initialState = {
    user: user ? user: null,
    isError: false,
    isSuccess: false,
    loading: false,
    message: "",
}

//register
export const register = createAsyncThunk(
    "auth/register",
    async (adminInfo, thunkApI) => {
        try {
            return authService.register(adminInfo)
        } catch (error) {
            const message = (
                error.response && error.response.data && error.response.data.message
            ) || error.message || error.toString();
            return thunkApI.rejectWithValue(message)
        }
    }
)

//login
export const login = createAsyncThunk(
    "auth/login",
    async (adminInfo, thunkApI) => {
        try {
            return authService.login(adminInfo)
        } catch (error) {
            const message = (
                error.response && error.response.data && error.response.data.message
            ) || error.message || error.toString();
            return thunkApI.rejectWithValue(message)
        }
    }
)

//logout
export const logout = createAsyncThunk(
    "auth/logout",
    async () => {
        authService.logout()
    }
)
const authSlice = createSlice({
    name: "authuser",
    initialState,
    reducers: {
        reset: (state) => {
            state.isError = false;
            state.loading = false;
            state.isSuccess = false;
            state.message = "";
            state.user = null;
        },
    },
    extraReducers:(builder)=>{
        builder
            .addCase(register.pending, (state) => {
                state.loading = true;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.loading = false;
                state.isError = false;
                state.isSuccess = true;
                state.user = action.payload;
            })
            .addCase(register.rejected, (state, action) => {
                state.isError = true;
                state.loading = false;
                state.isSuccess = false;
                state.message = action.payload;
                state.user = null;
            })
    }
})
export const { reset } = authSlice.actions;
export default authSlice.reducer