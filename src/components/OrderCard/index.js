import { Card, Header, Footer } from './styles'

export const OrderCard = ({ order, handleSelectedOrder }) => {
  const { id } = order
  return (
    <Card onClick={() => handleSelectedOrder(order)}>
      <Header>
        <h3>Orden #{id}</h3>
        <p>
          Vendedor: <span>Joseph Salen</span>
        </p>
      </Header>
      <Footer>
        <p>11:53 AM</p>
      </Footer>
    </Card>
  )
}
