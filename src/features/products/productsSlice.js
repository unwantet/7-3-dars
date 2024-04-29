import { combineReducers, createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: allProducts,
  total: 0,
  price : 0
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers:{
    increaseAmount: (state,{payload})=>{
     const item = state.products.find((product) => product.id === payload.id)
     i
     item.amount += 1
     productsSlice.caseReducers.calculateTotal(state)
    },deceraseAmount: (state,{payload})=>{
      const item = state.products.find((product) => product.id === payload.id)
      item.amount -= 1
      productsSlice.caseReducers.calculateTotal(state)
     },
     removeItem: (state, {payload})=>{
      state.products = state.products.filter((product)=> product.id !== payload.id)
      productsSlice.caseReducers.calculateTotal(state)
     }
     ,calculateTotal: (state)=>{
      let price = 0;
      let total = 0;
      state.products.forEach((product)=>{
        total = total + product.amount
        price = price + product.amount * product.price
      })
      state.total = state.products.reduce((acc, product) => acc + product.amount * product.price, 0)
     }
  },

})

export const {} = productsSlice.actions

export default counterSlice.reducer