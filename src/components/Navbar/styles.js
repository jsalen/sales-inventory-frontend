import styled from 'styled-components'

export const Nav = styled.nav`
  position: absolute;
  height: 45px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 400;
  background-color: #888888;
  color: #fbfbfb;
  z-index: 3;
  transition: width 0.15s;
`

export const Menu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: start;

  & > li {
    width: 100%;
    height: 45px;
    display: flex;
    align-items: center;
    padding: 8px;
    cursor: pointer;
    transition: background-color 0.3s;

    & svg {
      margin-right: 8px;
    }
  }

  & > li:hover {
    background-color: #5d5d5d;
  }
`
