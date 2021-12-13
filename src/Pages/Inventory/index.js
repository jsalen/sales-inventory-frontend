import { FilterBoard } from '../../components/FilterBoard'
import { Button } from '../../components/Button'
import { InventoryTable } from '../../containers/InventoryTable'

import { Btn, Container, Footer, InventoryContainer } from './styles'

export const Inventory = () => {
  return (
    <Container>
      <FilterBoard
        title='Cantidad de Productos'
        length='120'
        placeHolder='Producto...'
        categories
      />
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
