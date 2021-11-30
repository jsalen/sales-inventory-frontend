import styled from 'styled-components'

export const Form = styled.form`
  position: relative;
  width: 320px;
  height: 35px;
  display: flex;
`

export const Input = styled.input`
  width: 100%;
  border: 1px solid #888888;
  border-radius: 4px;
  outline: none;
  padding: 8px;
  font-size: 16px;
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
  color: #888888;
  background-color: #f5f5f5;
  border: 1px solid #888888;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
`
