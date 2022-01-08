import { OrderDetailTable } from '../../components/OrderDetailTable'
import { Content, Date, Footer, Header, Info } from './styles'
import { formatDate } from '../../helpers'

export const OrderDetail = ({ order }) => {
  const { id, total, products, change, payment, client, date } = order
  const [day, time] = formatDate(date)

  const getPayment = (payment) => {
    if (payment === 1) {
      return 'Efectivo'
    } else if (payment === 2) {
      return 'Tarjeta de Débito'
    }
  }

  return (
    <>
      <Header>
        <h2>Orden #{id}</h2>
        <Info>
          <div>
            <p>
              Cliente: <span>{client || 'Sin identificar'}</span>
            </p>
          </div>
        </Info>
        <Date>
          <p>{day}</p>
          <p>{time}</p>
        </Date>
      </Header>

      <Content>
        <OrderDetailTable products={products} />
      </Content>

      <Footer>
        <p>
          Método de Pago: <span>{getPayment(payment)}</span>
        </p>
        <p>
          Vuelto: <span>${change}</span>
        </p>
        <p>
          Monto total: <span>${total}</span>
        </p>
      </Footer>
    </>
  )
}
