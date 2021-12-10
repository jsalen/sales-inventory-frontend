import { Container, Header, Name } from './styles'

export const OrderDetail = () => {
  return (
    <Container>
      <Header>
        <h2>Orden #1</h2>
        <div>
          <p>Vendido por:</p>
          <Name>Joseph Salen</Name>
        </div>
        <p>11:53 AM</p>
      </Header>
    </Container>
  )
}
