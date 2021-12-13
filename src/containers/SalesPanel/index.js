import { CartAmount } from '../../components/CartAmount/index'

import { AiOutlineDelete } from 'react-icons/ai'
import {
  Aside,
  Item,
  List,
  Title,
  Quantity,
  Delete,
  Footer,
  Btn,
  AmountContainer,
  ListContainer,
} from './styles'

export const SalesPanel = ({ cart }) => {
  return (
    <Aside>
      <Title>Venta</Title>
      <ListContainer>
        {cart ? (
          <List>
            <Item>
              <Quantity>10</Quantity>
              <p>Producto</p>
              <p>$5</p>
              <Delete>
                <AiOutlineDelete size='17' />
              </Delete>
            </Item>
          </List>
        ) : (
          <p>No hay productos en el carrito</p>
        )}
      </ListContainer>
      <AmountContainer>
        <CartAmount />
      </AmountContainer>
      <Footer>
        <Btn primary>Pagar</Btn>
        <Btn>Cancelar</Btn>
      </Footer>
    </Aside>
  )
}
