import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Modal } from '../../components/Modal'
import { SalesModal } from '../../components/SalesModal'
import { removeFromCart, clearCart } from '../../features/cart/cartSlice'

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
  Amount,
} from './styles'

export const SalesPanel = () => {
  const [openModal, setOpenModal] = useState(false)
  const products = useSelector((state) => state.cart.products)
  const total = useSelector((state) => state.cart.total)
  const dispatch = useDispatch()

  const handleModal = () => {
    setOpenModal((prev) => !prev)
  }

  return (
    <>
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
          <Amount>
            <p>Total:</p>
            <span>$ {total.toFixed(2)}</span>
          </Amount>
        </AmountContainer>
        <Footer>
          <Btn primary onClick={handleModal}>
            Pagar
          </Btn>
          <Btn onClick={() => dispatch(clearCart())}>Cancelar</Btn>
        </Footer>
      </Aside>

      {openModal && (
        <Modal>
          <SalesModal handleModal={handleModal} />
        </Modal>
      )}
    </>
  )
}
