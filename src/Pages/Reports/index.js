import { useState } from 'react'
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

  const handleChange = (date) => {
    setStartDate(date)
  }

  const handleDelete = () => {
    setStartDate(new Date())
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
        <OrderCard />
      </OrderContainer>
      <DetailsContainer>
        <OrderDetail />
      </DetailsContainer>
    </Container>
  )
}
