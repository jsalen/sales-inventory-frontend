import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  orders: [
    // {
    //   id: 1,
    //   date: new Date(),
    //   products: [
    //     {
    //       id: 3,
    //       name: 'Product 1',
    //       price: 10,
    //     },
    //   ],
    //   total: 10,
    //   change: 10,
    //   client: 'Joseph Salen',
    //   payment: 1,
    // },
  ],
}

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    createOrder: (state, action) => {
      const { order } = action.payload
      const id = state.orders.length + 1
      const date = new Date() // DEV: Dejar que la DB genere la fecha

      state.orders.push({ id, date, ...order })
    },
  },
})

export const { createOrder } = ordersSlice.actions

export default ordersSlice.reducer
