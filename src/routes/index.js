import { Routes, Route } from 'react-router-dom'
import { Clients } from '../Pages/Clients'
import { Close } from '../Pages/Close'
import { Home } from '../Pages/Home'
import { Inventory } from '../Pages/Inventory'
import { Reports } from '../Pages/Reports'
import { Sales } from '../Pages/Sales'

export const Routing = () => {
  return (
    <Routes>
      <Route path='/sales-inventory-frontend/' element={<Home />} />
      <Route path='/sales-inventory-frontend/sales' element={<Sales />} />
      <Route path='/sales-inventory-frontend/clients' element={<Clients />} />
      <Route
        path='/sales-inventory-frontend/inventory'
        element={<Inventory />}
      />
      <Route path='/sales-inventory-frontend/reports' element={<Reports />} />
      <Route path='/sales-inventory-frontend/close' element={<Close />} />
    </Routes>
  )
}
