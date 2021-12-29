import { formatDate } from '../../helpers'

import { Card, Header, Footer } from './styles'

export const OrderCard = ({ order, handleSelectedOrder }) => {
  const { id, date } = order
  const [day, time] = formatDate(date)

  return (
    <Card onClick={() => handleSelectedOrder(order)}>
      <Header>
        <h3>Orden #{id}</h3>
        <p>
          Vendedor: <span>Joseph Salen</span>
        </p>
      </Header>
      <Footer>
        <p>{time}</p>
      </Footer>
    </Card>
  )
}
