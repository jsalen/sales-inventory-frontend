import { OrderDetailTable } from '../../components/OrderDetailTable'
import { Content, Date, Footer, Header, Info, Name } from './styles'

export const OrderDetail = () => {
  return (
    <>
      <Header>
        <h2>Orden #1</h2>
        <Info>
          <div>
            <p>
              Vendido por: <span>Joseph Salen</span>
            </p>
          </div>
          <div>
            <p>
              Cliente: <span>Sin Identificar</span>
            </p>
          </div>
        </Info>
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
