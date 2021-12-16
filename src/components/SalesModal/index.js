import { useState } from 'react'
import { useSelector } from 'react-redux'

import {
  Btn,
  Container,
  Content,
  Footer,
  Section,
  Select,
  TotalBox,
} from './styles'

export const SalesModal = ({ setOpenModal }) => {
  const [totalPaid, setTotalPaid] = useState(0)
  const total = useSelector((state) => state.cart.total)

  const handleClick = () => {
    setOpenModal((prev) => !prev)
  }

  const handleChange = (e) => {
    setTotalPaid(e.target.value)
  }

  const getChange = () => (totalPaid - total).toFixed(2)

  return (
    <Container>
      <header>Pagar</header>

      <Select id='method'>
        <option defaultValue hidden>
          Método de Pago
        </option>
        <option value='efectivo'>Efectivo</option>
        <option value='tarjeta-debito'>Tarjeta de Debito</option>
      </Select>

      <Content>
        <Section>
          <p>Monto Forma de pago:</p>
          <input
            type='number'
            name='amount'
            pattern='[0-9]+'
            min='0'
            placeholder={total}
            onChange={handleChange}
          />
        </Section>

        <TotalBox>
          <article>
            <p>Total a Pagar:</p>
            <span>$ {total}</span>
          </article>
          <article>
            <p>Total Pagado:</p>
            <span>$ {totalPaid || 0}</span>
          </article>
          <article>
            <p>Vuelto:</p>
            <span>$ {getChange() || 0}</span>
          </article>
        </TotalBox>
      </Content>
      <Footer>
        <Btn primary onClick={handleClick} disabled={total > totalPaid}>
          Confirmar
        </Btn>
        <Btn onClick={handleClick}>Cancelar</Btn>
      </Footer>
    </Container>
  )
}
