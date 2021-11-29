import { Routes, Route } from 'react-router-dom'
import { ShoppingCart } from '../components/ShoppingCart'
import { Sales } from '../Pages/Sales'

export const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<Sales />} />
      <Route path='/shopping' element={<ShoppingCart />} />
    </Routes>
  )
}
