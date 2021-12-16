import { useSelector } from 'react-redux'
import { FilterBoard } from '../../components/FilterBoard'
import { InventoryTable } from '../../containers/InventoryTable'
import useFilterData from '../../hooks/useFilterData'

import { Btn, Container, Footer, InventoryContainer } from './styles'

export const Inventory = () => {
  const products = useSelector((state) => state.products.products)
  const {
    query,
    setQuery,
    filteredData: filteredProducts,
  } = useFilterData(products)

  return (
    <Container>
      <FilterBoard
        title='Productos'
        placeHolder='Producto...'
        query={query}
        setQuery={setQuery}
      />
      <InventoryContainer>
        <InventoryTable products={filteredProducts} />
      </InventoryContainer>
      <Footer>
        <Btn primary>Crear</Btn>
        <Btn>Regresar</Btn>
      </Footer>
    </Container>
  )
}
