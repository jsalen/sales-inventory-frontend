import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../features/products/productsSlice'

import { ModalContainer, ModalButton, Form, FormGroup, Footer } from './styles'

export const ProductAddModal = ({ id, handleModal }) => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(addProduct({ id, value: Number(value) }))

    handleModal()
  }

  return (
    <ModalContainer>
      <h1>Añadir Producto</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <label htmlFor='stock'>¿Cuántos deseas añadir?</label>
          <input
            type='text'
            name='stock'
            pattern='[0-9]+'
            title='Ingrese solo números'
            autoFocus
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </FormGroup>
        <Footer>
          <ModalButton primary disabled={value <= 0}>
            Aceptar
          </ModalButton>
          <ModalButton onClick={handleModal}>Cancelar</ModalButton>
        </Footer>
      </Form>
    </ModalContainer>
  )
}
