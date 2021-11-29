import { useState } from 'react'
import { MenuIcon } from '../MenuIcon'

import {
  MdLogout,
  MdOutlineShoppingCart,
  MdOutlineInventory2,
  MdOutlineDocumentScanner,
} from 'react-icons/md'
import { AiOutlineUser, AiOutlineCloseSquare } from 'react-icons/ai'

import { Nav, Menu } from './styles'

export const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <Nav open={open}>
      <Menu>
        <MenuIcon open={open} setOpen={setOpen} />
        {open && (
          <>
            <li>
              <MdOutlineShoppingCart /> Vender
            </li>
            <li>
              <AiOutlineUser /> Clientes
            </li>
            <li>
              <MdOutlineInventory2 /> Inventario
            </li>
            <li>
              <MdOutlineDocumentScanner /> Reportes
            </li>
            <li>
              <AiOutlineCloseSquare /> Cerrar Caja
            </li>
          </>
        )}
      </Menu>
      {open && (
        <Menu>
          <li>
            <MdLogout /> Cerrar sesión
          </li>
        </Menu>
      )}
    </Nav>
  )
}
