import { Routes, Route } from 'react-router-dom'
import { ShoppingCart } from '../components/ShoppingCart'
import { Clients } from '../Pages/Clients'
import { Home } from '../Pages/Home'
import { Sales } from '../Pages/Sales'

export const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sales' element={<Sales />} />
      <Route path='/clients' element={<Clients />} />
    </Routes>
  )
}
