import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  opening: 0,
}

export const cashierSlice = createSlice({
  name: 'cashier',
  initialState,
  reducers: {
    setOpeningAmount: (state, action) => {
      const { amount } = action.payload
      state.opening = amount
    },
  },
})

export const { setOpeningAmount } = cashierSlice.actions

export default cashierSlice.reducer
