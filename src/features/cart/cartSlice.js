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
      state.total = state.products.reduce(
        (accum, { price }) => accum + price,
        0
      )
    },
    removeFromCart: (state, action) => {
      state.products.splice(action.payload, 1)
      state.total = state.products.reduce(
        (accum, { price }) => accum + price,
        0
      )
    },
    clearCart: (state) => {
      state.products = []
      state.total = 0
    },
  },
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions

export default cartSlice.reducer
