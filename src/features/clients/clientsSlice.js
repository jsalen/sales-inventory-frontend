import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  clients: [
    {
      id: 1,
      name: 'Sydney',
      last_name: 'Camellini',
      email: 'scamellini0@merriam-webster.com',
      phone: '(190) 2533430',
    },
    {
      id: 2,
      name: 'Giff',
      last_name: 'De Filippo',
      email: null,
      phone: '(550) 4591061',
    },
    {
      id: 3,
      name: 'Giorgio',
      last_name: 'Drohun',
      email: null,
      phone: '(201) 6832865',
    },
    {
      id: 4,
      name: 'Hoebart',
      last_name: 'Drexel',
      email: 'hdrexel3@yolasite.com',
      phone: '(845) 8690008',
    },
    {
      id: 5,
      name: 'Spike',
      last_name: 'Piele',
      email: 'spiele4@csmonitor.com',
      phone: '(241) 7913867',
    },
    {
      id: 6,
      name: 'Moishe',
      last_name: 'Feehely',
      email: null,
      phone: '(100) 6567118',
    },
    {
      id: 7,
      name: 'Bil',
      last_name: 'Demetr',
      email: 'bdemetr6@godaddy.com',
      phone: '(723) 8766551',
    },
    {
      id: 8,
      name: 'Serena',
      last_name: 'Errichelli',
      email: null,
      phone: '(510) 8243583',
    },
    {
      id: 9,
      name: 'Charmian',
      last_name: 'Edrich',
      email: 'cedrich8@youtube.com',
      phone: '(130) 5866689',
    },
    {
      id: 10,
      name: 'Bartel',
      last_name: 'Coie',
      email: null,
      phone: '(415) 8257586',
    },
    {
      id: 11,
      name: 'Curtis',
      last_name: 'Virgin',
      email: 'cvirgina@imgur.com',
      phone: '(625) 9599286',
    },
    {
      id: 12,
      name: 'Debbie',
      last_name: 'Firmager',
      email: 'dfirmagerb@oakley.com',
      phone: '(182) 6715382',
    },
    {
      id: 13,
      name: 'Yule',
      last_name: 'Kurton',
      email: 'ykurtonc@seattletimes.com',
      phone: '(422) 8564644',
    },
    {
      id: 14,
      name: 'Josepha',
      last_name: 'Dumphry',
      email: 'jdumphryd@hostgator.com',
      phone: '(360) 8720081',
    },
    {
      id: 15,
      name: 'Zorah',
      last_name: 'Tue',
      email: 'ztuee@harvard.edu',
      phone: '(126) 8258687',
    },
    {
      id: 16,
      name: 'Ottilie',
      last_name: 'Lanfranchi',
      email: 'olanfranchif@bbc.co.uk',
      phone: '(963) 8492563',
    },
    {
      id: 17,
      name: 'Cullin',
      last_name: 'Jobling',
      email: null,
      phone: '(450) 2069064',
    },
    {
      id: 18,
      name: 'Dunn',
      last_name: 'Densun',
      email: 'ddensunh@behance.net',
      phone: '(722) 6439435',
    },
    {
      id: 19,
      name: 'Gwyn',
      last_name: 'Edmonston',
      email: 'gedmonstoni@weebly.com',
      phone: '(329) 1075027',
    },
    {
      id: 20,
      name: 'Leodora',
      last_name: 'Wayland',
      email: null,
      phone: '(349) 8908596',
    },
  ],
}

export const clientsSlice = createSlice({
  name: 'clients',
  initialState,
  reducers: {
    addClient: (state, action) => {
      state.clients.push(action.payload)
    },
  },
})

export const { addClient } = clientsSlice.actions

export default clientsSlice.reducer
