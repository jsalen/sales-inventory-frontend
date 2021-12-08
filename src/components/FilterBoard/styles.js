import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: 120px;
  display: grid;
  grid-template-columns: 70% 1fr;
  grid-template-rows: 70px 1fr;
  grid-template-areas:
    'main aside'
    'main aside';
  background-color: #f8f7ff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.4);
`

export const Header = styled.header`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
`

export const Title = styled.p`
  font-weight: 700;
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

export const Alphabet = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / -1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #b8b8ff;
  color: #f8f7ff;
  font-weight: 700;

  & > a {
    width: 35px;
    height: inherit;
    display: grid;
    place-items: center;
    transition: all 0.15s ease;
  }

  & > a:hover {
    background-color: #f8f7ff;
    color: #b8b8ff;
  }
`

export const Search = styled.div`
  grid-column: 2 / -1;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 12px;
  background-color: #9381ff;
  color: #f8f7ff;
`
