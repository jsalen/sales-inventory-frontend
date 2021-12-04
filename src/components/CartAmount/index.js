import { Container } from './styles'

export const CartAmount = () => {
  return (
    <>
      <Container>
        <p>Total en Dólares:</p>
        <span>$10.00</span>
      </Container>
      <Container>
        <p>Total en Bolívares:</p>
        <span>Bs. 50.00</span>
      </Container>
    </>
  )
}
