import empty from '../../images/no-orders.png'

import { Figure } from './styles'

export const OrdersEmpty = () => {
  return (
    <Figure>
      <img src={empty} alt='Vacio' />
      <figcaption>
        <h2>No hay ordenes</h2>
      </figcaption>
    </Figure>
  )
}
