import { useDispatch } from 'react-redux'
import { deleteProduct } from '../../features/products/productsSlice'
import { Modal } from '../Modal'

import { ModalButton, ModalContainer } from './styles'

export const ProductDeleteModal = ({ product, handleModal }) => {
  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(deleteProduct(product))
    handleModal()
  }

  return (
    <Modal>
      <ModalContainer>
        <h1>Confirmar</h1>
        <p>¿Desea eliminar este producto?</p>
        <footer>
          <ModalButton primary onClick={handleDelete}>
            Aceptar
          </ModalButton>
          <ModalButton onClick={handleModal}>Cancelar</ModalButton>
        </footer>
      </ModalContainer>
    </Modal>
  )
}
