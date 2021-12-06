import { ClientFilterBoard } from '../../components/ClientFilterBoard'
import { ClientsTable } from '../../containers/ClientsTable'

import { Container } from './styles'

export const Clients = () => {
  return (
    <Container>
      <ClientFilterBoard />
      <ClientsTable />
    </Container>
  )
}
