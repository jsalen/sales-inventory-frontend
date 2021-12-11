import {
  CardDetails,
  CashDetails,
  CashFlow,
  Container,
  Content,
  Header,
  Sales,
  Footer,
  DetailCard,
  Options,
  Button,
  Date,
} from './styles'

export const Close = () => {
  return (
    <Container>
      <Date>
        <span>Fecha: 11/12/2021</span>
      </Date>
      <Header>
        <h1>Nombre del Local C.A</h1>
        <p>Cierre de Caja</p>
      </Header>
      <Content>
        <Sales>
          <header>
            <p>Resumen de Ventas</p>
            <p>$1.280</p>
          </header>

          <article>
            <p>EFECTIVO</p>
            <p>+ $680</p>
          </article>
          <article>
            <p>TARJETA DEBITO</p>
            <p>+ $600</p>
          </article>
          <article>
            <p>VUELTO</p>
            <p>- $100</p>
          </article>
        </Sales>
        <CashFlow>
          <header>
            <p>Resumen de Caja</p>
            <p>$1.300</p>
          </header>

          <CashDetails>
            <header>
              <p>Total Efectivo</p>
              <p>+ $700</p>
            </header>

            <article>
              <p>EFECTIVO</p>
              <p>+ $680</p>
            </article>
            <article>
              <p>Saldo Apertura</p>
              <p>+ $60</p>
            </article>
            <article>
              <p>Vuelto</p>
              <p>- $40</p>
            </article>
          </CashDetails>

          <CardDetails>
            <p>TARJETA DEBITO</p>
            <p>+ $600</p>
          </CardDetails>
        </CashFlow>
      </Content>
      <Footer>
        <header>
          <article>
            <h3>Efectivo Final</h3>
            <DetailCard>
              <p>$ 680</p>
            </DetailCard>
          </article>
          <article>
            <h3>Diferencia Efectivo</h3>
            <DetailCard>
              <p>$ 0</p>
            </DetailCard>
          </article>
          <article>
            <h3>Diferencia Total</h3>
            <DetailCard>
              <p>$ 0</p>
            </DetailCard>
          </article>
        </header>
        <Options>
          <Button>Saldo Apertura</Button>
          <Button primary>Cerrar Caja</Button>
        </Options>
      </Footer>
    </Container>
  )
}
