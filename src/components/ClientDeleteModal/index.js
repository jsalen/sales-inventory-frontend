import { useDispatch } from 'react-redux'
import { Modal } from '../Modal'
import { removeClient } from '../../features/clients/clientsSlice'

import { ModalButton, ModalContainer } from './styles'

export const ClientDeleteModal = ({ client, handleModal }) => {
  const { id, name } = client
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(removeClient(id))
    setToggleModal(false)
  }

  return (
    <Modal>
      <ModalContainer>
        <h1>Confirmar</h1>
        <p>¿Desea eliminar a {name}?</p>
        <footer>
          <ModalButton primary onClick={() => handleDelete(id)}>
            Aceptar
          </ModalButton>
          <ModalButton onClick={handleModal}>Cancelar</ModalButton>
        </footer>
      </ModalContainer>
    </Modal>
  )
}
