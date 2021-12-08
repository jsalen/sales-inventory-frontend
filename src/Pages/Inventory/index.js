import { FilterBoard } from '../../components/FilterBoard'
import { InventoryTable } from '../../containers/InventoryTable'

import { Container } from './styles'

export const Inventory = () => {
  return (
    <Container>
      <FilterBoard
        title='Cantidad de Productos'
        length='120'
        placeHolder='Producto...'
      />
      <InventoryTable />
    </Container>
  )
}
