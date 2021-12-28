import { useState } from 'react'
import { useSelector } from 'react-redux'

import { DateFilter } from '../../components/DateFilter'
import { OrderCard } from '../../components/OrderCard'
import { OrderDetail } from '../../containers/OrderDetail'

import {
  Container,
  FilterContainer,
  OrderContainer,
  DetailsContainer,
} from './styles'

export const Reports = () => {
  const [startDate, setStartDate] = useState(new Date())
  const [selectedOrder, setSelectedOrder] = useState({})
  const { orders } = useSelector((state) => state.orders)

  const handleChange = (date) => {
    setStartDate(date)
  }

  const handleDelete = () => {
    setStartDate(new Date())
  }

  const handleSelectedOrder = (order) => {
    setSelectedOrder(order)
  }

  return (
    <Container>
      <FilterContainer>
        <h2>Filtrar por fecha:</h2>
        <DateFilter
          startDate={startDate}
          handleChange={handleChange}
          handleDelete={handleDelete}
        />
      </FilterContainer>

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
          <h2>No hay ordenes</h2>
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
