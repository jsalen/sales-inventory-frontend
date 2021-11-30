import { MdSearch } from 'react-icons/md'

import { Form, Input, SearchButton } from './styles'

export const SearchBar = () => {
  return (
    <Form>
      <Input type='text' placeholder='Buscar...' />
      <SearchButton type='submit'>
        <MdSearch />
      </SearchButton>
    </Form>
  )
}
