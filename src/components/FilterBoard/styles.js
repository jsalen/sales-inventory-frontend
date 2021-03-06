import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: 96px;
  display: grid;
  grid-template-columns: 70% 1fr;
  grid-template-rows: 35px 1fr;
  background-color: #f8f7ff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.4);
`

export const Header = styled.header`
  grid-column: 1 / 2;
  grid-row: 2 / -1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;

  & h1 {
    font-size: 24px;
  }
`

export const Button = styled.button`
  width: 106px;
  height: auto;
  padding: 6px 12px;
  border: 1px solid #b8b8ff;
  border-radius: 8px;
  color: #9381ff;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover {
    color: #f8f7ff;
    background-color: #b8b8ff;
  }
`

export const Search = styled.div`
  grid-column: 2 / -1;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 12px;
  background-color: #9381ff;
  color: #f8f7ff;
`
