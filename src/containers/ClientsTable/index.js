import { ClientContainer } from '../ClientContainer'

import { Container } from './styles'

export const ClientsTable = ({ clients }) => {
  return (
    <Container>
      {clients.map((client) => (
        <ClientContainer key={client.id} client={client} />
      ))}
    </Container>
  )
}
