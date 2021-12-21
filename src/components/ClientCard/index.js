import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeClient } from '../../features/clients/clientsSlice'
import { Modal } from '../Modal'

import {
  MdOutlineCreate,
  MdOutlineHistory,
  MdOutlineDelete,
  MdOutlineEdit,
} from 'react-icons/md'

import {
  Button,
  Card,
  Header,
  MenuIcon,
  MenuList,
  Name,
  ModalContainer,
  ModalButton,
} from './styles'

export const ClientCard = ({ client }) => {
  const dispatch = useDispatch()
  const { id, name, last_name } = client
  const [open, setOpen] = useState(false)
  const [toggleModal, setToggleModal] = useState(false)

  const handleModal = () => {
    setToggleModal((prev) => !prev)
  }

  const handleDelete = (id) => {
    dispatch(removeClient(id))
    setToggleModal(false)
  }

  return (
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

      {toggleModal && (
        <Modal>
          <ModalContainer>
            <h1>Confirmar</h1>
            <p>¿Desea eliminar a {name}?</p>
            <footer>
              <ModalButton primary onClick={() => handleDelete(id)}>
                Aceptar
              </ModalButton>
              <ModalButton onClick={() => setToggleModal(false)}>
                Cancelar
              </ModalButton>
            </footer>
          </ModalContainer>
        </Modal>
      )}
    </Card>
  )
}
