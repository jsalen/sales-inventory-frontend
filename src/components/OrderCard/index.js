import { formatDate } from '../../helpers'

import { Card, Header, Footer } from './styles'

export const OrderCard = ({ order, handleSelectedOrder }) => {
  const { id, date, total_paid } = order
  const [day, time] = formatDate(date)

  return (
    <Card onClick={() => handleSelectedOrder(order)}>
      <Header>
        <h3>Orden #{id}</h3>
        <p>
          Venta por: <span>$ {total_paid}</span>
        </p>
      </Header>
      <Footer>
        <p>{time}</p>
      </Footer>
    </Card>
  )
}
