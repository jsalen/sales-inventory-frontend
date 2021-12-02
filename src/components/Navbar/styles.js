import styled from 'styled-components'
import { swipeDown } from '../../styles/animations'

export const Nav = styled.nav`
  position: relative;
  height: 45px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 16px;
  background-color: #f8f7ff;
  border-bottom: 2px solid #9381ff;
  z-index: 3;
`

export const Menu = styled.ul`
  position: absolute;
  top: 45px;
  left: 0;
  width: 184px;
  display: flex;
  flex-direction: column;
  background-color: #f8f7ff;
  border: 1px solid #9381ff;
  border-top: 0;
  font-size: 14px;
  font-weight: 400;
  color: #9381ff;
  border-radius: 0 4px 4px 0;
  ${swipeDown({ time: '0.15s', type: 'ease-out' })}

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
    color: #f8f7ff;
    background-color: #b8b8ff;
  }
`

export const Btn = styled.button`
  width: 75px;
  height: 30px;
  color: #9381ff;
  font-size: 14px;
  font-weight: 400;
  border-radius: 4px;
  border: 1px solid #9381ff;
  cursor: pointer;

  &:hover {
    background-color: #9381ff;
    color: #f8f7ff;
  }
`
