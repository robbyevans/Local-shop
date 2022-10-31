import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import ItemsAPIService from './ItemAPIService'

const initialState = {
    items:[],
    isError: false,
    loading: false,
    isSuccess: false,
    message:''
}

//get all items
export const getItems = createAsyncThunk(
    'items/fetchall',
    async(_, thunkAPI) => {
    try {
        return await ItemsAPIService.fetchItems();
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

        return thunkAPI.rejectWithValue(message)
    }
    }
)

export const ItemSlice = createSlice({
    name: "items",
    initialState,
    reducers: {
        reset:(state)=>initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(getItems.pending, (state) => {
                state.loading = true;
            })
            .addCase(getItems.fulfilled, (state, action) => {
                state.loading = false;
                state.isSuccess = true;
                state.items = action.payload
            })
            .addCase(getItems.rejected, (state, action) => {
                state.isSuccess = false;
                state.isError = true;
                state.message = action.payload;
        })
    }
})

export const { reset } = ItemSlice.actions
export default ItemSlice.reducer;