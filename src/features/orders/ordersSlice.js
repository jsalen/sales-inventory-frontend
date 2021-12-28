import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    createOrder: (state, action) => {
      const { order } = action.payload
      const id = state.length + 1

      state.push({ id, ...order })
    },
  },
})

export const { createOrder } = ordersSlice.actions

export default ordersSlice.reducer
