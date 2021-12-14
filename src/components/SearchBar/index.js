import { MdSearch } from 'react-icons/md'

import { Form, Input, SearchButton } from './styles'

export const SearchBar = ({ text, query, setQuery }) => {
  return (
    <Form>
      <Input
        type='text'
        placeholder={text}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <SearchButton type='submit'>
        <MdSearch />
      </SearchButton>
    </Form>
  )
}
