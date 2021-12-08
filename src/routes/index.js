import { Routes, Route } from 'react-router-dom'
import { Clients } from '../Pages/Clients'
import { Home } from '../Pages/Home'
import { Inventory } from '../Pages/Inventory'
import { Sales } from '../Pages/Sales'

export const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sales' element={<Sales />} />
      <Route path='/clients' element={<Clients />} />
      <Route path='/inventory' element={<Inventory />} />
    </Routes>
  )
}
