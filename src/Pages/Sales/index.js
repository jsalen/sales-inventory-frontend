import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { MetaHead } from '../../components/MetaHead'
import { ProductPanel } from '../../containers/ProductPanel'
import { SalesPanel } from '../../containers/SalesPanel'
import { clearCart } from '../../features/cart/cartSlice'

import { Container } from './styles'

const meta = (
  <MetaHead
    title='Panel de Ventas'
    description='Panel de Ventas'
    image='https://davecast.s3.amazonaws.com/avatarnegativo.jpg'
    url='https://fake-platzi-store-merch.web.app/'
  />
)

export const Sales = () => {
  const products = useSelector((state) => state.cart.products)
  const dispatch = useDispatch()

  useEffect(() => {
    return () => dispatch(clearCart())
  }, [])

  return (
    <>
      {meta}
      <Container products={products.length > 0}>
        <ProductPanel />
        {products.length > 0 && <SalesPanel />}
      </Container>
    </>
  )
}
