import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setOpeningAmount } from '../../features/cashier/cashierSlice'
import { Modal } from '../Modal'

import { Footer, Form, FormGroup, ModalButton, ModalContainer } from './styles'

export const OpeningAmountModal = ({ handleModal }) => {
  const [value, setValue] = useState(0)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(setOpeningAmount({ amount: Number(value) }))

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
              pattern='([0-9]*[.])?[0-9]+'
              title='Solo se permiten números'
              min='0'
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
