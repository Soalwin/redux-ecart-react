import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//action return promise
export const fetchProducts = createAsyncThunk("products/fetchProducts", async()=>{
    const result = await axios.get("https://dummyjson.com/products")
    sessionStorage.setItem("allProducts",JSON.stringify(result.data.products))
    // console.log(result.data.products);
    return result.data.products
    
})

const productSlice = createSlice({
    name:"products",
    initialState:{
        allproducts:[],
        loading:false,
        errorMsg:""
    },
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.fulfilled,(state,apiResult)=>{
            state.allproducts = apiResult.payload
            state.loading = false
            state.errorMsg = ""
        })
        builder.addCase(fetchProducts.pending,(state)=>{
            state.allproducts = []
            state.loading = true
            state.errorMsg = ""
        })
        builder.addCase(fetchProducts.rejected,(state)=>{
            state.allproducts = []
            state.loading = false
            state.errorMsg = "api call failed"
        })
    }
})

export default productSlice.reducer