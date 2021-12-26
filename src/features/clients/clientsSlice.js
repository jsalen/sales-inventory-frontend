import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  clients: [
    {
      id: 1,
      name: 'Sydney',
      last_name: 'Camellini',
      email: 'scamellini0@merriam-webster.com',
      phone: '(190) 2533430',
      notes: [],
    },
    {
      id: 2,
      name: 'Giff',
      last_name: 'De Filippo',
      email: null,
      phone: '(550) 4591061',
      notes: [],
    },
    {
      id: 3,
      name: 'Giorgio',
      last_name: 'Drohun',
      email: null,
      phone: '(201) 6832865',
      notes: [],
    },
    {
      id: 4,
      name: 'Hoebart',
      last_name: 'Drexel',
      email: 'hdrexel3@yolasite.com',
      phone: '(845) 8690008',
      notes: [],
    },
    {
      id: 5,
      name: 'Spike',
      last_name: 'Piele',
      email: 'spiele4@csmonitor.com',
      phone: '(241) 7913867',
      notes: [],
    },
    {
      id: 6,
      name: 'Moishe',
      last_name: 'Feehely',
      email: null,
      phone: '(100) 6567118',
      notes: [],
    },
    {
      id: 7,
      name: 'Bil',
      last_name: 'Demetr',
      email: 'bdemetr6@godaddy.com',
      phone: '(723) 8766551',
      notes: [],
    },
    {
      id: 8,
      name: 'Serena',
      last_name: 'Errichelli',
      email: null,
      phone: '(510) 8243583',
      notes: [],
    },
    {
      id: 9,
      name: 'Charmian',
      last_name: 'Edrich',
      email: 'cedrich8@youtube.com',
      phone: '(130) 5866689',
      notes: [],
    },
    {
      id: 10,
      name: 'Bartel',
      last_name: 'Coie',
      email: null,
      phone: '(415) 8257586',
      notes: [],
    },
    {
      id: 11,
      name: 'Curtis',
      last_name: 'Virgin',
      email: 'cvirgina@imgur.com',
      phone: '(625) 9599286',
      notes: [],
    },
    {
      id: 12,
      name: 'Debbie',
      last_name: 'Firmager',
      email: 'dfirmagerb@oakley.com',
      phone: '(182) 6715382',
      notes: [],
    },
    {
      id: 13,
      name: 'Yule',
      last_name: 'Kurton',
      email: 'ykurtonc@seattletimes.com',
      phone: '(422) 8564644',
      notes: [],
    },
    {
      id: 14,
      name: 'Josepha',
      last_name: 'Dumphry',
      email: 'jdumphryd@hostgator.com',
      phone: '(360) 8720081',
      notes: [],
    },
    {
      id: 15,
      name: 'Zorah',
      last_name: 'Tue',
      email: 'ztuee@harvard.edu',
      phone: '(126) 8258687',
      notes: [],
    },
    {
      id: 16,
      name: 'Ottilie',
      last_name: 'Lanfranchi',
      email: 'olanfranchif@bbc.co.uk',
      phone: '(963) 8492563',
      notes: [],
    },
    {
      id: 17,
      name: 'Cullin',
      last_name: 'Jobling',
      email: null,
      phone: '(450) 2069064',
      notes: [],
    },
    {
      id: 18,
      name: 'Dunn',
      last_name: 'Densun',
      email: 'ddensunh@behance.net',
      phone: '(722) 6439435',
      notes: [],
    },
    {
      id: 19,
      name: 'Gwyn',
      last_name: 'Edmonston',
      email: 'gedmonstoni@weebly.com',
      phone: '(329) 1075027',
      notes: [],
    },
    {
      id: 20,
      name: 'Leodora',
      last_name: 'Wayland',
      email: null,
      phone: '(349) 8908596',
      notes: [],
    },
  ],
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
