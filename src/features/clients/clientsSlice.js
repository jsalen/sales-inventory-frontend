import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  clients: [],
}

export const clientsSlice = createSlice({
  name: 'clients',
  initialState,
  reducers: {
    addClient: (state, action) => {
      const { client } = action.payload
      const id = state.clients.length + 1

      state.clients.push({ id, ...client })
    },
    removeClient: (state, action) => {
      state.clients = state.clients.filter(
        (client) => client.id !== action.payload
      )
    },
    updateClient: (state, action) => {
      const { id, client, index: clientIndex } = action.payload

      state.clients[clientIndex] = { id, ...client }
    },
  },
})

export const { addClient, removeClient, updateClient } = clientsSlice.actions

export default clientsSlice.reducer
