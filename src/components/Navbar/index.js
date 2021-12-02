import { useState } from 'react'
import { Link } from 'react-router-dom'

import {
  MdLogout,
  MdOutlineShoppingCart,
  MdOutlineInventory2,
  MdOutlineDocumentScanner,
} from 'react-icons/md'
import { AiOutlineUser, AiOutlineCloseSquare } from 'react-icons/ai'

import { Nav, Menu, Btn } from './styles'

export const Navbar = () => {
  const [open, setOpen] = useState(false)

  const handleToggle = () => {
    setOpen((prev) => setOpen(!prev))
  }

  return (
    <Nav open={open}>
      <Btn onClick={handleToggle}>Opciones</Btn>
      {open && (
        <Menu>
          <li onClick={handleToggle}>
            <Link to='/'>
              <MdOutlineShoppingCart /> Vender
            </Link>
          </li>
          <li onClick={handleToggle}>
            <Link to='/shopping'>
              <AiOutlineUser /> Clientes
            </Link>
          </li>
          <li onClick={handleToggle}>
            <MdOutlineInventory2 /> Inventario
          </li>
          <li onClick={handleToggle}>
            <MdOutlineDocumentScanner /> Reportes
          </li>
          <li onClick={handleToggle}>
            <AiOutlineCloseSquare /> Cerrar Caja
          </li>
          <li onClick={handleToggle}>
            <MdLogout /> Cerrar sesión
          </li>
        </Menu>
      )}
    </Nav>
  )
}
