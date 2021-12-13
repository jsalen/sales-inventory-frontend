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
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      )
    },
  },
})

export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer
