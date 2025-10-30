import {  createSlice } from "@reduxjs/toolkit";




const wishlistSlice = createSlice({
    name:"wishlist",
    initialState:[],
    reducers:{
        addToWishlist:(state, actionFromView)=>{
            state.push(actionFromView.payload)
        },
        removeItem:(state, actionfromwishlist)=>{
           return  state.filter((item)=>item.id != actionfromwishlist.payload)
        }
    },
})

export const {addToWishlist,removeItem}= wishlistSlice.actions
export default wishlistSlice.reducer