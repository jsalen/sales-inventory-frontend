import styled from 'styled-components'

export const Form = styled.form`
  position: relative;
  width: 100%;
  height: 35px;
  display: flex;
`

export const Input = styled.input`
  width: 100%;
  border: 1px solid #cecece;
  border-radius: 4px;
  outline: none;
  padding: 8px;
  font-size: 15px;

  &:focus {
    border: 1px solid #9381ff;
  }
`

export const SearchButton = styled.button`
  position: absolute;
  width: 40px;
  right: 0;
  top: 0;
  bottom: 0;
  padding: 8px;
  display: grid;
  place-items: center;
  font-size: 18px;
  color: #f8f7ff;
  background-color: #9381ff;
  border: 1px solid #b8b8ff;
  border-radius: 0 4px 4px 0;
  cursor: pointer;

  &:hover {
    color: #9381ff;
    background-color: #f8f7ff;
  }
`
