import { useSelector } from 'react-redux'
import { ProductCard } from '../../components/ProductCard'
import { SearchBar } from '../../components/SearchBar/index'
import useFilterProducts from '../../hooks/useFilterProducts'

import {
  CategoryList,
  Container,
  Footer,
  FormContainer,
  ProductList,
} from './styles'

export const ProductPanel = () => {
  const products = useSelector((state) => state.products.products)
  const { query, setQuery, filteredProducts } = useFilterProducts(products)

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
      <Footer>
        <CategoryList>
          <li>Popular</li>
          <li>Bebidas</li>
          <li>Aseo</li>
          <li>Chucheria</li>
          <li>Helados</li>
          <li>Cuidado Personal</li>
          <li>Utilería</li>
        </CategoryList>
      </Footer>
    </Container>
  )
}
