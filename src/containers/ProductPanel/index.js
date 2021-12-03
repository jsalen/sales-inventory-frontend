import { ProductCard } from '../../components/ProductCard'
import { SearchBar } from '../../components/SearchBar'
import { products } from '../../db'
import {
  CategoryList,
  Container,
  Footer,
  FormContainer,
  ProductList,
} from './styles'

export const ProductPanel = () => {
  return (
    <Container>
      <FormContainer>
        <SearchBar text={'Buscar Producto...'} />
      </FormContainer>
      <ProductList>
        {products.map((product) => (
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
