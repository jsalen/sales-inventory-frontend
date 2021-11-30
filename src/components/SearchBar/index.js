import { MdSearch } from 'react-icons/md'

import { Form, Input, SearchButton } from './styles'

export const SearchBar = ({ text }) => {
  return (
    <Form>
      <Input type='text' placeholder={text} />
      <SearchButton type='submit'>
        <MdSearch />
      </SearchButton>
    </Form>
  )
}
