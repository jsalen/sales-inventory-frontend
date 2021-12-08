import { FilterBoard } from '../../components/FilterBoard'
import { ClientsTable } from '../../containers/ClientsTable'

import { Container } from './styles'

export const Clients = () => {
  return (
    <Container>
      <FilterBoard
        title='Cantidad de Clientes'
        length='80'
        placeHolder='Cliente...'
      />
      <ClientsTable />
    </Container>
  )
}
