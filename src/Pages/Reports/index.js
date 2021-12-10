import { useState } from 'react'
import { DateFilter } from '../../components/DateFilter'

import { Container, FilterContainer } from './styles'

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
    </Container>
  )
}
