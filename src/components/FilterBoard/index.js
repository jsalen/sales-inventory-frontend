import { SearchBar } from '../SearchBar'

import { Container, Title, Alphabet, Search, Header, Button } from './styles'

export const FilterBoard = ({ title, length, placeHolder }) => {
  return (
    <Container>
      <Header>
        <div>
          <Title>{title}</Title>
          <p>{length}</p>
        </div>
        <Button>Ver todos</Button>
      </Header>
      <Alphabet>
        <a href='#'>A</a>
        <a href='#'>B</a>
        <a href='#'>C</a>
        <a href='#'>D</a>
        <a href='#'>E</a>
        <a href='#'>F</a>
        <a href='#'>G</a>
        <a href='#'>H</a>
        <a href='#'>I</a>
        <a href='#'>J</a>
        <a href='#'>K</a>
        <a href='#'>L</a>
        <a href='#'>M</a>
        <a href='#'>N</a>
        <a href='#'>Ñ</a>
        <a href='#'>O</a>
        <a href='#'>P</a>
        <a href='#'>Q</a>
        <a href='#'>R</a>
        <a href='#'>S</a>
        <a href='#'>T</a>
        <a href='#'>U</a>
        <a href='#'>V</a>
        <a href='#'>W</a>
        <a href='#'>X</a>
        <a href='#'>Y</a>
        <a href='#'>Z</a>
      </Alphabet>
      <Search>
        <header>
          <p>Búsqueda Rápida</p>
        </header>
        <SearchBar text={placeHolder} />
      </Search>
    </Container>
  )
}
