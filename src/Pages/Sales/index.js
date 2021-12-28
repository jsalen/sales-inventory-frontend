import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ProductPanel } from '../../containers/ProductPanel'
import { SalesPanel } from '../../containers/SalesPanel'
import { clearCart } from '../../features/cart/cartSlice'

import { Container } from './styles'

export const Sales = () => {
  const products = useSelector((state) => state.cart.products)
  const dispatch = useDispatch()

  useEffect(() => {
    return () => dispatch(clearCart())
  }, [])

  return (
    <Container products={products.length > 0}>
      <ProductPanel />
      {products.length > 0 && <SalesPanel />}
    </Container>
  )
}
