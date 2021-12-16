import { FilterBoard } from '../../components/FilterBoard'
import { InventoryTable } from '../../containers/InventoryTable'

import { Btn, Container, Footer, InventoryContainer } from './styles'

export const Inventory = () => {
  return (
    <Container>
      <FilterBoard title='Productos' placeHolder='Producto...' />
      <InventoryContainer>
        <InventoryTable />
      </InventoryContainer>
      <Footer>
        <Btn primary>Crear</Btn>
        <Btn>Regresar</Btn>
      </Footer>
    </Container>
  )
}
