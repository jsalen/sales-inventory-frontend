import { useState } from 'react'
import { Link } from 'react-router-dom'

import {
  MdOutlineShoppingCart,
  MdOutlineInventory2,
  MdOutlineDocumentScanner,
} from 'react-icons/md'
import { AiOutlineUser, AiOutlineCloseSquare } from 'react-icons/ai'

import { Nav, Menu, Btn, Container } from './styles'

export const Navbar = () => {
  const [open, setOpen] = useState(false)

  const handleToggle = () => {
    setOpen((prev) => setOpen(!prev))
  }

  return (
    <Nav open={open}>
      <Btn onClick={handleToggle}>Menú</Btn>
      {open && (
        <Container onClick={handleToggle}>
          <Menu>
            <Link to='/sales-inventory-frontend/' onClick={() => handleToggle}>
              <MdOutlineShoppingCart /> Vender
            </Link>

            <Link
              to='/sales-inventory-frontend/clients'
              onClick={() => handleToggle}
            >
              <AiOutlineUser /> Clientes
            </Link>
            <Link
              to='/sales-inventory-frontend/inventory'
              onClick={() => handleToggle}
            >
              <MdOutlineInventory2 /> Inventario
            </Link>

            <Link
              to='/sales-inventory-frontend/reports'
              onClick={() => handleToggle}
            >
              <MdOutlineDocumentScanner /> Reportes
            </Link>

            <Link
              to='/sales-inventory-frontend/close'
              onClick={() => handleToggle}
            >
              <AiOutlineCloseSquare /> Cerrar Caja
            </Link>
          </Menu>
        </Container>
      )}
    </Nav>
  )
}
