import { useState } from 'react'
import { useSelector } from 'react-redux'

import { OrderCard } from '../../components/OrderCard'
import { EmptyContainer } from '../../components/EmptyContainer'
import { MetaHead } from '../../components/MetaHead'
import { OrderDetail } from '../../containers/OrderDetail'
import empty from '../../images/no-orders.png'

import { Container, OrderContainer, DetailsContainer } from './styles'

const meta = (
  <MetaHead
    title='Reportes de Ventas'
    description='Reportes de Ventas del día'
    image='https://davecast.s3.amazonaws.com/avatarnegativo.jpg'
    url='https://fake-platzi-store-merch.web.app/'
  />
)

export const Reports = () => {
  const [selectedOrder, setSelectedOrder] = useState({})
  const { orders } = useSelector((state) => state.orders)

  const handleSelectedOrder = (order) => {
    setSelectedOrder(order)
  }

  return (
    <>
      {meta}
      <Container>
        <OrderContainer>
          {orders.length > 0 ? (
            orders.map((order) => (
              <OrderCard
                key={order.id}
                order={order}
                handleSelectedOrder={handleSelectedOrder}
              />
            ))
          ) : (
            <EmptyContainer image={empty} alt='Vacio' title='No hay ordenes' />
          )}
        </OrderContainer>

        <DetailsContainer>
          {Object.keys(selectedOrder).length > 0 ? (
            <OrderDetail order={selectedOrder} />
          ) : (
            <h1>Seleccione una orden</h1>
          )}
        </DetailsContainer>
      </Container>
    </>
  )
}
