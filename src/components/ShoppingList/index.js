import { CartAmount } from '../CartAmount'

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

export const ShoppingList = () => {
  return (
    <Aside>
      <Title>Venta</Title>
      <ListContainer>
        <List>
          <Item>
            <Quantity>10</Quantity>
            <p>Producto</p>
            <p>$5</p>
            <Delete>
              <AiOutlineDelete size='17' />
            </Delete>
          </Item>
          <Item>
            <Quantity>1</Quantity>
            <p>Producto</p>
            <p>$5</p>
            <Delete>
              <AiOutlineDelete size='17' />
            </Delete>
          </Item>
          <Item>
            <Quantity>1</Quantity>
            <p>Producto</p>
            <p>$5</p>
            <Delete>
              <AiOutlineDelete size='17' />
            </Delete>
          </Item>
          <Item>
            <Quantity>1</Quantity>
            <p>Producto</p>
            <p>$5</p>
            <Delete>
              <AiOutlineDelete size='17' />
            </Delete>
          </Item>
          <Item>
            <Quantity>10</Quantity>
            <p>Producto</p>
            <p>$5</p>
            <Delete>
              <AiOutlineDelete size='17' />
            </Delete>
          </Item>
          <Item>
            <Quantity>1</Quantity>
            <p>Producto</p>
            <p>$5</p>
            <Delete>
              <AiOutlineDelete size='17' />
            </Delete>
          </Item>
          <Item>
            <Quantity>1</Quantity>
            <p>Producto</p>
            <p>$5</p>
            <Delete>
              <AiOutlineDelete size='17' />
            </Delete>
          </Item>
          <Item>
            <Quantity>1</Quantity>
            <p>Producto</p>
            <p>$5</p>
            <Delete>
              <AiOutlineDelete size='17' />
            </Delete>
          </Item>
          <Item>
            <Quantity>10</Quantity>
            <p>Producto</p>
            <p>$5</p>
            <Delete>
              <AiOutlineDelete size='17' />
            </Delete>
          </Item>
          <Item>
            <Quantity>1</Quantity>
            <p>Producto</p>
            <p>$5</p>
            <Delete>
              <AiOutlineDelete size='17' />
            </Delete>
          </Item>
          <Item>
            <Quantity>1</Quantity>
            <p>Producto</p>
            <p>$5</p>
            <Delete>
              <AiOutlineDelete size='17' />
            </Delete>
          </Item>
          <Item>
            <Quantity>1</Quantity>
            <p>Producto</p>
            <p>$5</p>
            <Delete>
              <AiOutlineDelete size='17' />
            </Delete>
          </Item>
          <Item>
            <Quantity>10</Quantity>
            <p>Producto</p>
            <p>$5</p>
            <Delete>
              <AiOutlineDelete size='17' />
            </Delete>
          </Item>
          <Item>
            <Quantity>1</Quantity>
            <p>Producto</p>
            <p>$5</p>
            <Delete>
              <AiOutlineDelete size='17' />
            </Delete>
          </Item>
          <Item>
            <Quantity>1</Quantity>
            <p>Producto</p>
            <p>$5</p>
            <Delete>
              <AiOutlineDelete size='17' />
            </Delete>
          </Item>
          <Item>
            <Quantity>1</Quantity>
            <p>Producto</p>
            <p>$5</p>
            <Delete>
              <AiOutlineDelete size='17' />
            </Delete>
          </Item>
        </List>
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
