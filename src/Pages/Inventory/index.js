import { useState } from 'react'
import { useSelector } from 'react-redux'
import { FilterBoard } from '../../components/FilterBoard'
import { MetaHead } from '../../components/MetaHead'
import { Modal } from '../../components/Modal'
import { ProductCreateForm } from '../../components/ProductCreateForm'
import { InventoryTable } from '../../containers/InventoryTable'

import useFilterData from '../../hooks/useFilterData'

import { Btn, Container, Footer, InventoryContainer } from './styles'

const meta = (
  <MetaHead
    title='Inventario'
    description='Control de Inventario'
    image='https://davecast.s3.amazonaws.com/avatarnegativo.jpg'
    url='https://fake-platzi-store-merch.web.app/'
  />
)

export const Inventory = () => {
  const [createModal, setCreateModal] = useState(false)
  const products = useSelector((state) => state.products.products)
  const {
    query,
    setQuery,
    filteredData: filteredProducts,
  } = useFilterData(products)

  const handleModal = () => setCreateModal((prev) => !prev)

  return (
    <>
      {meta}
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
          <Btn primary onClick={handleModal}>
            Crear
          </Btn>
        </Footer>
      </Container>

      {createModal && (
        <Modal>
          <ProductCreateForm handleModal={handleModal} />
        </Modal>
      )}
    </>
  )
}
