import { useState } from 'react'
import { useSelector } from 'react-redux'

import { OrderCard } from '../../components/OrderCard'
import { OrdersEmpty } from '../../components/OrdersEmpty'
import { OrderDetail } from '../../containers/OrderDetail'

import { Container, OrderContainer, DetailsContainer } from './styles'

export const Reports = () => {
  const [selectedOrder, setSelectedOrder] = useState({})
  const { orders } = useSelector((state) => state.orders)

  const handleSelectedOrder = (order) => {
    setSelectedOrder(order)
  }

  return (
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
          <OrdersEmpty />
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
  )
}
