import { AiOutlineUserAdd, AiOutlineDelete } from 'react-icons/ai'
import { Aside, Button, Item, List, Title, Quantity } from './styles'

export const ShoppingList = () => {
  return (
    <Aside>
      <Title>Venta</Title>
      <Button>
        <AiOutlineUserAdd size='18' /> Agregar Cliente
      </Button>
      <List>
        <Item>
          <Quantity>10</Quantity>
          <p>Producto</p>
          <p>$5</p>
          <AiOutlineDelete />
        </Item>
        <Item>
          <Quantity>1</Quantity>
          <p>Producto</p>
          <p>$5</p>
          <AiOutlineDelete />
        </Item>
        <Item>
          <Quantity>1</Quantity>
          <p>Producto</p>
          <p>$5</p>
          <AiOutlineDelete />
        </Item>
        <Item>
          <Quantity>1</Quantity>
          <p>Producto</p>
          <p>$5</p>
          <AiOutlineDelete />
        </Item>
      </List>
    </Aside>
  )
}
