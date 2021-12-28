import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice'
import productsReducer from './features/products/productsSlice'
import clientsReducer from './features/clients/clientsSlice'
import ordersReducer from './features/orders/ordersSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    clients: clientsReducer,
    orders: ordersReducer,
  },
})
