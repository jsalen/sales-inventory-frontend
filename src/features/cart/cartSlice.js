import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
  total: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.products.push(action.payload)
    },
    removeFromCart: (state, action) => {
      state.products.splice(action.payload, 1)
    },
    clearCart: (state) => {
      state.products = []
    },
  },
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions

export default cartSlice.reducer
