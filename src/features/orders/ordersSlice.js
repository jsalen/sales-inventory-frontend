import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  orders: [],
}

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    createOrder: (state, action) => {
      const { order } = action.payload
      const id = state.orders.length + 1

      state.orders.push({ id, ...order })
    },
  },
})

export const { createOrder } = ordersSlice.actions

export default ordersSlice.reducer
