import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart, clearCart } from '../../features/cart/cartSlice'
import { CartAmount } from '../../components/CartAmount/index'

import { AiOutlineDelete } from 'react-icons/ai'
import {
  Aside,
  Item,
  List,
  Title,
  Delete,
  Footer,
  Btn,
  AmountContainer,
  ListContainer,
} from './styles'

export const SalesPanel = () => {
  const products = useSelector((state) => state.cart.products)
  const dispatch = useDispatch()

  const totalDollars = () => {
    const sum = products.reduce((accum, { price }) => accum + price, 0)

    return sum.toFixed(2)
  }

  const totalBolivares = () => {
    const bs = totalDollars() * 4.8

    return bs.toFixed(2)
  }

  return (
    <Aside>
      <Title>Venta</Title>
      <ListContainer>
        <List>
          {products.map((product, idx) => (
            <Item key={idx}>
              <p>{product.name}</p>
              <p>${product.price}</p>
              <Delete onClick={() => dispatch(removeFromCart(idx))}>
                <AiOutlineDelete size='17' />
              </Delete>
            </Item>
          ))}
        </List>
      </ListContainer>
      <AmountContainer>
        <CartAmount
          totalDollars={totalDollars()}
          totalBolivares={totalBolivares()}
        />
      </AmountContainer>
      <Footer>
        <Btn primary>Pagar</Btn>
        <Btn onClick={() => dispatch(clearCart())}>Cancelar</Btn>
      </Footer>
    </Aside>
  )
}
