import { useState } from 'react'
import { useSelector } from 'react-redux'
import { ClientCreateForm } from '../ClientCreateForm'
import { Modal } from '../Modal'

import { MdOutlineAdd } from 'react-icons/md'

import {
  AddClientBox,
  Btn,
  ClientSelect,
  Container,
  Content,
  Footer,
  Section,
  Select,
  Tooltip,
  TotalBox,
} from './styles'

export const SalesModal = ({ setOpenModal }) => {
  const [totalPaid, setTotalPaid] = useState(0)
  const [createClientModal, setCreateClientModal] = useState(false)
  const total = useSelector((state) => state.cart.total)
  const clients = useSelector((state) => state.clients.clients)

  const handleClick = () => {
    setOpenModal((prev) => !prev)
  }

  const handleChange = (e) => {
    setTotalPaid(e.target.value)
  }

  const handlecreateClientModal = () => {
    setCreateClientModal((prev) => !prev)
  }

  const getChange = () => (totalPaid - total).toFixed(2)

  return (
    <>
      <Container>
        <header>Pagar</header>

        <ClientSelect>
          <Select id='client'>
            <option defaultValue hidden>
              Seleccionar Cliente
            </option>
            {clients.map((client) => (
              <option key={client.id} value={client.id}>
                {client.last_name}, {client.name}
              </option>
            ))}
          </Select>
          <AddClientBox onClick={() => setCreateClientModal((prev) => !prev)}>
            <Tooltip>Crear Cliente</Tooltip>
            <MdOutlineAdd size={24} />
          </AddClientBox>
        </ClientSelect>

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
              placeholder={total.toFixed(2)}
              onChange={handleChange}
            />
          </Section>

          <TotalBox>
            <article>
              <p>Total a Pagar:</p>
              <span>$ {total.toFixed(2)}</span>
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

      {createClientModal && (
        <Modal>
          <ClientCreateForm handleModal={handlecreateClientModal} />
        </Modal>
      )}
    </>
  )
}
