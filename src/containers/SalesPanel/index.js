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

export const SalesPanel = ({ setOpenModal }) => {
  const products = useSelector((state) => state.cart.products)
  const total = useSelector((state) => state.cart.total)
  const dispatch = useDispatch()

  const totalBolivares = () => {
    const bs = total * 4.8

    return bs.toFixed(2)
  }

  const handleSubmit = () => {
    setOpenModal((prev) => !prev)
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
          totalDollars={total.toFixed(2)}
          totalBolivares={totalBolivares()}
        />
      </AmountContainer>
      <Footer>
        <Btn primary onClick={handleSubmit}>
          Pagar
        </Btn>
        <Btn onClick={() => dispatch(clearCart())}>Cancelar</Btn>
      </Footer>
    </Aside>
  )
}
