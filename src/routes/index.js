import { Routes, Route } from 'react-router-dom'
import { ShoppingCart } from '../components/ShoppingCart'
import { Home } from '../Pages/Home'
import { Sales } from '../Pages/Sales'

export const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sales' element={<Sales />} />
      <Route path='/shopping' element={<ShoppingCart />} />
    </Routes>
  )
}
