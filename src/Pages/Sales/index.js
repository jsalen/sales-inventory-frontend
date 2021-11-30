import { ProductPanel } from '../../containers/ProductPanel'
import { SalesPanel } from '../../containers/SalesPanel'

import { Container } from './styles'

export const Sales = () => {
  return (
    <Container>
      <ProductPanel />
      <SalesPanel />
    </Container>
  )
}
