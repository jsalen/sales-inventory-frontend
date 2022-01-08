import { useState } from 'react'
import { Link } from 'react-router-dom'

import {
  MdLogout,
  MdOutlineShoppingCart,
  MdOutlineInventory2,
  MdOutlineDocumentScanner,
  MdOutlineHome,
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
      <Btn onClick={handleToggle}>Opciones</Btn>
      {open && (
        <Container onClick={handleToggle}>
          <Menu>
            <Link to='/' onClick={() => handleToggle}>
              <MdOutlineHome /> Inicio
            </Link>

            <Link to='/sales' onClick={() => handleToggle}>
              <MdOutlineShoppingCart /> Vender
            </Link>

            <Link to='/clients' onClick={() => handleToggle}>
              <AiOutlineUser /> Clientes
            </Link>
            <Link to='/inventory' onClick={() => handleToggle}>
              <MdOutlineInventory2 /> Inventario
            </Link>

            <Link to='/reports' onClick={() => handleToggle}>
              <MdOutlineDocumentScanner /> Reportes
            </Link>

            <Link to='/close' onClick={() => handleToggle}>
              <AiOutlineCloseSquare /> Cerrar Caja
            </Link>
          </Menu>
        </Container>
      )}
    </Nav>
  )
}
