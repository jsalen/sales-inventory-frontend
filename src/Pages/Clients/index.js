import { useSelector } from 'react-redux'
import { FilterBoard } from '../../components/FilterBoard'
import { ClientsTable } from '../../containers/ClientsTable'
import useFilterClients from '../../hooks/useFilterClients'

import { MdOutlineAdd } from 'react-icons/md'

import { Container, Footer, Tooltip } from './styles'

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

      <Footer>
        <button>
          <Tooltip>Crear Cliente</Tooltip>
          <MdOutlineAdd size='48' />
        </button>
      </Footer>
    </Container>
  )
}
