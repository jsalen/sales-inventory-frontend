import { OrderDetailTable } from '../../components/OrderDetailTable'
import { Content, Date, Footer, Header, Name } from './styles'

export const OrderDetail = () => {
  return (
    <>
      <Header>
        <h2>Orden #1</h2>
        <div>
          <p>Vendido por:</p>
          <Name>Joseph Salen</Name>
        </div>
        <Date>
          <p>12/12/2021</p>
          <p>11:53 AM</p>
        </Date>
      </Header>
      <Content>
        <OrderDetailTable />
      </Content>
      <Footer>
        <p>
          Monto total: <span>$100</span>
        </p>
      </Footer>
    </>
  )
}
