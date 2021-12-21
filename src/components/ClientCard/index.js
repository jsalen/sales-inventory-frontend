import { useState } from 'react'
import { ClientModal } from '../ClientModal'

import {
  MdOutlineCreate,
  MdOutlineHistory,
  MdOutlineDelete,
  MdOutlineEdit,
} from 'react-icons/md'

import { Button, Card, Header, MenuIcon, MenuList, Name } from './styles'

export const ClientCard = ({ client }) => {
  const { id, name, last_name } = client
  const [open, setOpen] = useState(false)
  const [toggleModal, setToggleModal] = useState(false)

  const handleModal = () => {
    setToggleModal((prev) => !prev)
  }

  return (
    <>
      <Card>
        <Header>
          <div>
            <Name>{`${last_name}, ${name}`}</Name>
            <Button>Ver detalles</Button>
          </div>
          <MenuIcon onClick={() => setOpen((prev) => !prev)}>
            <div />
            <div />
            <div />
            {open && (
              <MenuList>
                <li>
                  <MdOutlineHistory /> Historial
                </li>
                <li onClick={() => handleModal(id)}>
                  <MdOutlineDelete /> Borrar
                </li>
                <li>
                  <MdOutlineEdit /> Editar
                </li>
              </MenuList>
            )}
          </MenuIcon>
        </Header>
        <footer>
          <Button bold>
            <MdOutlineCreate /> Agregar notas
          </Button>
        </footer>
      </Card>

      {toggleModal && (
        <ClientModal id={id} name={name} handleModal={handleModal} />
      )}
    </>
  )
}
