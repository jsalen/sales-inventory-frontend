import { OrderDetailTable } from '../../components/OrderDetailTable'
import { Content, Date, Footer, Header, Info } from './styles'

export const OrderDetail = ({ order }) => {
  const { id, total, products, change, payment, client } = order
  return (
    <>
      <Header>
        <h2>Orden #{id}</h2>
        <Info>
          <div>
            <p>
              Vendido por: <span>Joseph Salen</span>
            </p>
          </div>
          <div>
            <p>
              Cliente: <span>{client || 'Sin identificar'}</span>
            </p>
          </div>
        </Info>
        <Date>
          <p>12/12/2021</p>
          <p>11:53 AM</p>
        </Date>
      </Header>

      <Content>
        <OrderDetailTable products={products} />
      </Content>

      <Footer>
        <p>
          Método de Pago: <span>{payment}</span>
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
