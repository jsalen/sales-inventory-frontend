import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createOrder } from '../../features/orders/ordersSlice'
import { clearCart } from '../../features/cart/cartSlice'
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

export const SalesModal = ({ handleModal }) => {
  const [client, setClient] = useState(null)
  const [payment, setPayment] = useState(null)
  const [totalPaid, setTotalPaid] = useState(0)
  const [createClientModal, setCreateClientModal] = useState(false)

  const { products, total } = useSelector((state) => state.cart)
  const { clients } = useSelector((state) => state.clients)

  const dispatch = useDispatch()

  const handleChange = (e) => {
    setTotalPaid(e.target.value)
  }

  const handlecreateClientModal = () => {
    setCreateClientModal((prev) => !prev)
  }

  const getChange = (totalPaid - total).toFixed(2)

  const handleSubmit = () => {
    const order = {
      products,
      total: Number(total.toFixed(2)),
      total_paid: Number(totalPaid),
      change: Number(getChange),
      payment: Number(payment),
      client,
    }

    dispatch(createOrder({ order }))
    dispatch(clearCart())

    handleModal()
  }

  return (
    <>
      <Container>
        <header>Pagar</header>

        <ClientSelect>
          <Select id='client' onChange={(e) => setClient(e.target.value)}>
            <option defaultValue hidden>
              Seleccionar Cliente
            </option>
            {clients.map((client) => (
              <option
                key={client.id}
                value={`${client.last_name}, ${client.name}`}
              >
                {client.last_name}, {client.name}
              </option>
            ))}
          </Select>

          <AddClientBox onClick={() => setCreateClientModal((prev) => !prev)}>
            <Tooltip>Crear Cliente</Tooltip>
            <MdOutlineAdd size={24} />
          </AddClientBox>
        </ClientSelect>

        <Select id='method' onChange={(e) => setPayment(e.target.value)}>
          <option defaultValue hidden>
            Método de Pago (*)
          </option>
          <option value='1'>Efectivo</option>
          <option value='2'>Tarjeta de Debito</option>
        </Select>

        <Content>
          <Section>
            <p>Monto Forma de pago: (*)</p>
            <input
              type='number'
              name='amount'
              pattern='[0-9]+'
              title='Solo se permiten números'
              min='0'
              step='0.01'
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
              <span>$ {getChange || 0}</span>
            </article>
          </TotalBox>
        </Content>

        <Footer>
          <Btn
            primary
            onClick={handleSubmit}
            disabled={totalPaid < total || payment === null}
          >
            Confirmar
          </Btn>
          <Btn onClick={handleModal}>Cancelar</Btn>
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
