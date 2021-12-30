import { useState } from 'react'
import { Modal } from '../Modal'

import { Footer, Form, FormGroup, ModalButton, ModalContainer } from './styles'

export const OpeningAmountModal = ({ setOpeningAmount, handleModal }) => {
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    setOpeningAmount(Number(value))
    handleModal()
  }

  return (
    <Modal>
      <ModalContainer>
        <h1>Establecer Saldo de Apertura</h1>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <FormGroup>
            <label htmlFor='stock'>Ingresar Monto</label>
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
            <ModalButton primary>Aceptar</ModalButton>
            <ModalButton onClick={handleModal}>Cancelar</ModalButton>
          </Footer>
        </Form>
      </ModalContainer>
    </Modal>
  )
}
