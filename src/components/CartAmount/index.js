import { useState } from 'react'

import { Button, Container } from './styles'

export const CartAmount = ({ totalDollars, totalBolivares }) => {
  const [toggle, setToggle] = useState(true)

  return (
    <>
      <Button onClick={() => setToggle((prev) => !prev)}>Cambiar moneda</Button>
      {toggle ? (
        <Container>
          <p>Total en Dólares:</p>
          <span>${totalDollars}</span>
        </Container>
      ) : (
        <Container>
          <p>Total en Bolívares:</p>
          <span>Bs. {totalBolivares}</span>
        </Container>
      )}
    </>
  )
}
