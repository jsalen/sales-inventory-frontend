import { useSelector } from 'react-redux'
import { FilterBoard } from '../../components/FilterBoard'
import { ClientsTable } from '../../containers/ClientsTable'
import useFilterClients from '../../hooks/useFilterClients'

import { Container } from './styles'

export const Clients = () => {
  const clients = useSelector((state) => state.clients.clients)
  const {
    query,
    setQuery,
    filteredData: filteredClients,
  } = useFilterClients(clients)

  return (
    <Container>
      <FilterBoard
        title='Clientes'
        placeHolder='Cliente...'
        query={query}
        setQuery={setQuery}
      />
      <ClientsTable clients={filteredClients} />
    </Container>
  )
}
