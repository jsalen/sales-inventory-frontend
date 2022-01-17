import { Routes, Route } from 'react-router-dom'
import { Clients } from '../Pages/Clients'
import { Close } from '../Pages/Close'
import { Inventory } from '../Pages/Inventory'
import { Reports } from '../Pages/Reports'
import { Sales } from '../Pages/Sales'

export const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<Sales />} />
      <Route path='/clients' element={<Clients />} />
      <Route path='/inventory' element={<Inventory />} />
      <Route path='/reports' element={<Reports />} />
      <Route path='/close' element={<Close />} />
    </Routes>
  )
}
