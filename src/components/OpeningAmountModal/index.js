import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setOpeningAmount } from '../../features/cashier/cashierSlice'
import { Modal } from '../Modal'
import { fixNumber } from '../../helpers'

import { Footer, Form, FormGroup, ModalButton, ModalContainer } from './styles'

export const OpeningAmountModal = ({ handleModal }) => {
  const [amount, setAmount] = useState(0)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    const fixedNumber = fixNumber(amount)

    dispatch(setOpeningAmount({ amount: fixedNumber }))
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
              type='number'
              name='stock'
              pattern='[0-9]+'
              title='Solo se permiten números'
              min='0'
              step='0.01'
              autoFocus
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
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
