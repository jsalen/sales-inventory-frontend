import { ClientContainer } from '../ClientContainer'

import { Container } from './styles'

export const ClientsTable = ({ clients }) => {
  return (
    <Container>
      {clients.map((client, idx) => (
        <ClientContainer key={client.id} client={client} index={idx} />
      ))}
    </Container>
  )
}
