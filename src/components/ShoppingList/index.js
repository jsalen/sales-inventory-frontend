import { Button } from '../Button'
import { AiOutlineUserAdd, AiOutlineDelete } from 'react-icons/ai'
import { Aside, Item, List, Title, Quantity, Delete, Footer } from './styles'

export const ShoppingList = () => {
  return (
    <Aside>
      <Title>Venta</Title>
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
      </List>
      <Footer>
        <Button variant='gray'>
          <AiOutlineUserAdd size='18' /> Agregar Cliente
        </Button>
        <Button hsize='lg'>Pagar</Button>
        <Button variant='warning' hsize='lg'>
          Cancelar
        </Button>
      </Footer>
    </Aside>
  )
}