import { SearchBar } from '../SearchBar'

import {
  Container,
  Title,
  Alphabet,
  Search,
  Header,
  Button,
  Select,
} from './styles'

export const FilterBoard = ({ title, placeHolder, query, setQuery }) => {
  return (
    <Container>
      <Header>
        <h1>Lista de {title}</h1>
        <Button onClick={() => setQuery('')}>Ver todos</Button>
      </Header>
      <Search>
        <header>
          <p>Búsqueda Rápida</p>
        </header>
        <SearchBar text={placeHolder} query={query} setQuery={setQuery} />
      </Search>
    </Container>
  )
}
