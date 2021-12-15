import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Modal } from '../../components/Modal'
import { ProductPanel } from '../../containers/ProductPanel'
import { SalesPanel } from '../../containers/SalesPanel'

import { Container } from './styles'

export const Sales = () => {
  const [openModal, setOpenModal] = useState(false)
  const products = useSelector((state) => state.cart.products)

  return (
    <Container products={products.length > 0}>
      <ProductPanel />
      {products.length > 0 && <SalesPanel setOpenModal={setOpenModal} />}

      {openModal && <Modal setOpenModal={setOpenModal}>Ventana Modal</Modal>}
    </Container>
  )
}
