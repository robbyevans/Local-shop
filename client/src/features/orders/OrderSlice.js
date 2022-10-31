import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import OrdersAPIService from './OrderAPIService'

const initialState = {
    items:[],
    isError: false,
    loading: false,
    isSuccess: false,
    message:''
}

//get all items
export const getOrders = createAsyncThunk(
    'orders/fetchall',
    async(_, thunkAPI) => {
    try {
        return await OrdersAPIService.fetchOrders();
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

        return thunkAPI.rejectWithValue(message)
    }
    }
)

export const OrderSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {
        reset:(state)=>initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(getOrders.pending, (state) => {
                state.loading = true;
            })
            .addCase(getOrders.fulfilled, (state, action) => {
                state.loading = false;
                state.isSuccess = true;
                state.items = action.payload
            })
            .addCase(getOrders.rejected, (state, action) => {
                state.isSuccess = false;
                state.isError = true;
                state.message = action.payload;
        })
    }
})

export const { reset } = OrderSlice.actions
export default OrderSlice.reducer;