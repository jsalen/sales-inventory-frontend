import styled from 'styled-components'

export const Container = styled.article`
  width: 340px;
  padding: 16px;
  display: grid;
  grid-template-rows: 38px 1fr;
  grid-gap: 16px;
  background: #f8f7ff;
  border-radius: 4px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.4);

  & h1 {
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    border-bottom: 1px solid #cecece;
  }
`

export const Button = styled.button`
  width: 130px;
  height: 35px;
  margin: 0 auto;
  color: #f8f7ff;
  background: #9381ff;
  border: 1px solid transparent;
  cursor: pointer;

  &:hover {
    background: #f8f7ff;
    border: 1px solid #9381ff;
    color: #9381ff;
  }
`
