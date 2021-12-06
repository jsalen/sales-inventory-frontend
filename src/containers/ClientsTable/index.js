import { ClientCard } from '../../components/ClientCard'
import { clients } from '../../db'
import { Container } from './styles'

export const ClientsTable = () => {
  return (
    <Container>
      {clients.map((client) => (
        <ClientCard key={client.id} client={client} />
      ))}
    </Container>
  )
}
