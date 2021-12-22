import { useState } from 'react'

import {
  MdOutlineHistory,
  MdOutlineDelete,
  MdOutlineEdit,
} from 'react-icons/md'

import { Card, Footer, Header, MenuIcon, MenuList, Name } from './styles'

export const ClientCard = ({
  client,
  handleDeleteModal,
  handleDetailsModal,
  handleEditModal,
}) => {
  const { id, name, last_name, notes } = client
  const [open, setOpen] = useState(false)

  return (
    <Card>
      <Header>
        <div>
          <Name>{`${last_name}, ${name}`}</Name>
        </div>
        <MenuIcon onClick={() => setOpen((prev) => !prev)}>
          <div />
          <div />
          <div />
          {open && (
            <MenuList>
              <li onClick={handleDetailsModal}>
                <MdOutlineHistory /> Detalles
              </li>
              <li onClick={() => handleDeleteModal(id)}>
                <MdOutlineDelete /> Borrar
              </li>
              <li onClick={handleEditModal}>
                <MdOutlineEdit /> Editar
              </li>
            </MenuList>
          )}
        </MenuIcon>
      </Header>
      <Footer>
        <h4>Notas:</h4>
        <p>{notes.length > 0 ? notes : 'Sin notas 👍'}</p>
      </Footer>
    </Card>
  )
}
