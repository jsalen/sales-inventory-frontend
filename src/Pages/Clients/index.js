import { useSelector } from 'react-redux'
import { FilterBoard } from '../../components/FilterBoard'
import { ClientsTable } from '../../containers/ClientsTable'
import useFilterData from '../../hooks/useFilterData'

import { Container } from './styles'

export const Clients = () => {
  const clients = useSelector((state) => state.clients.clients)
  const {
    query,
    setQuery,
    filteredData: filteredClients,
  } = useFilterData(clients)

  return (
    <Container>
      <FilterBoard
        title='Cantidad de Clientes'
        length={clients.length}
        placeHolder='Cliente...'
        query={query}
        setQuery={setQuery}
      />
      <ClientsTable clients={filteredClients} />
    </Container>
  )
}
