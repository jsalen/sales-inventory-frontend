import { Card, Header, Footer } from './styles'

export const OrderCard = () => {
  return [1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
    <Card>
      <Header>
        <h3>Orden #{item}</h3>
        <p>
          Vendedor: <span>Joseph Salen</span>
        </p>
      </Header>
      <Footer>
        <p>11:53 AM</p>
      </Footer>
    </Card>
  ))
}
