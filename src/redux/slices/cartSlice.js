import {  createSlice } from "@reduxjs/toolkit";




const cartSlice = createSlice({
    name:"cart ",
    initialState:[],
    reducers:{
        addToCart:(state, actionFromComponent)=>{
            const existingProduct = state.find(item=>item.id == actionFromComponent.payload.id)
            if(existingProduct){
                existingProduct.quantity++
                existingProduct.totalPrice = existingProduct.price * existingProduct.quantity
                const remainingProducts = state.filter(item=>item.id != existingProduct.id)
                state = [...remainingProducts,existingProduct]
            }else{

                state.push({...actionFromComponent.payload, quantity:1, totalPrice:actionFromComponent.payload.price})
            }
            
        },
        incrementQuantity:(state,actionFromCart)=>{
        const existingProduct = state.find(item=>item.id == actionFromCart.payload)
             existingProduct.quantity++
                existingProduct.totalPrice = existingProduct.price * existingProduct.quantity
                const remainingProducts = state.filter(item=>item.id != existingProduct.id)
                state = [...remainingProducts,existingProduct]
        },

        removeCartItem:(state,actionFromCart)=>{
            return state.filter(item=>item.id!=actionFromCart.payload)
        },
        decrementQuantity:(state,actionFromCart)=>{
             const existingProduct = state.find(item=>item.id == actionFromCart.payload)
             existingProduct.quantity--
                existingProduct.totalPrice = existingProduct.price * existingProduct.quantity
                const remainingProducts = state.filter(item=>item.id != existingProduct.id)
                state = [...remainingProducts,existingProduct]
        },

        
            emptyCart:(state)=>{
                return state = []
            }
        
        
    },
})

export const {addToCart,incrementQuantity,removeCartItem,decrementQuantity,emptyCart}= cartSlice.actions
export default cartSlice.reducer