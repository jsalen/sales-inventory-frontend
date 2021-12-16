import { useSelector } from 'react-redux'
import { ProductCard } from '../../components/ProductCard'
import { SearchBar } from '../../components/SearchBar/index'
import useFilterData from '../../hooks/useFilterData'

import { Container, FormContainer, ProductList } from './styles'

export const ProductPanel = () => {
  const products = useSelector((state) => state.products.products)
  const {
    query,
    setQuery,
    filteredData: filteredProducts,
  } = useFilterData(products)

  return (
    <Container>
      <FormContainer>
        <SearchBar
          text='Buscar producto...'
          query={query}
          setQuery={setQuery}
        />
      </FormContainer>
      <ProductList>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductList>
    </Container>
  )
}
