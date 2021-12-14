import { useSelector } from 'react-redux'
import { ProductPanel } from '../../containers/ProductPanel'
import { SalesPanel } from '../../containers/SalesPanel'

import { Container } from './styles'

export const Sales = () => {
  const products = useSelector((state) => state.cart.products)

  return (
    <Container products={products.length > 0}>
      <ProductPanel />
      {products.length > 0 && <SalesPanel />}
    </Container>
  )
}
