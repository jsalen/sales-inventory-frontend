import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      state.cart.push(payload)
    },
    removeFromCart: (state, { payload }) => {
      state.cart = state.cart.filter((item) => item.id !== payload)
    },
  },
})

export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer
