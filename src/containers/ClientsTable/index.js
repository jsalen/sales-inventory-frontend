import { Button } from '../../components/Button'
import { ClientCard } from '../../components/ClientCard'

import { Container } from './styles'

export const ClientsTable = ({ clients }) => {
  return (
    <Container>
      {clients.map((client) => (
        <ClientCard key={client.id} client={client} />
      ))}
    </Container>
  )
}
