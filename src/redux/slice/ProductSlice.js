import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct = createAsyncThunk('product/fetch', async () => {
    const response = await axios.get("https://fakestoreapi.com/products")
    return response.data;
})

const productSlice = createSlice({
    name: "product",
    initialState: { productList: [], status: 'idle', error: null },
    reducers: {
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProduct.pending, (state)=>{
            state.status = 'loading'
        }).addCase(fetchProduct.fulfilled, (state,action)=>{
            state.status = 'success'
            state.productList = action.payload
        }).addCase(fetchProduct.rejected, (state,action)=>{
            state.status = 'failed'
            state.error = action.error.message
        })
    }
});

export const selectProductStatus = (state) => state.product.status
export const selectProductList = (state) => state.product.productList
export const selectProductError = (state) => state.product.error

export default productSlice.reducer;

// https://fakestoreapi.com/products/categories
// https://fakestoreapi.com/products
// https://fakestoreapi.com/products/category/electronics
// https://fakestoreapi.com/products/category/women's%20clothing