import { Container } from './styles'

export const CartAmount = ({ totalDollars, totalBolivares }) => {
  return (
    <>
      <Container>
        <p>Total en Dólares:</p>
        <span>${totalDollars}</span>
      </Container>
      <Container>
        <p>Total en Bolívares:</p>
        <span>Bs. {totalBolivares}</span>
      </Container>
    </>
  )
}
