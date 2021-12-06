import styled from 'styled-components'
import { swipeDown } from '../../styles/animations'

export const Card = styled.article`
  width: 100%;
  height: 140px;
  padding: 16px 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #9381ff;
  color: #f8f7ff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.4);
`

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

export const Name = styled.p`
  font-size: 18px;
  font-weight: 700;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  color: #2e265e;
  font-weight: ${(props) => (props.bold ? '700' : 400)};
  cursor: pointer;

  & > svg {
    margin-right: 4px;
  }

  &:hover {
    border-bottom: 1px solid #2e265e;
  }
`

export const MenuIcon = styled.div`
  position: relative;
  cursor: pointer;

  & > div {
    width: 3px;
    height: 3px;
    background-color: #2e265e;
    margin: 2px;
  }
`

export const MenuList = styled.ul`
  position: absolute;
  top: 18px;
  right: -5px;
  width: 120px;
  display: flex;
  flex-direction: column;
  background-color: #f8f7ff;
  border: 1px solid #9381ff;
  border-radius: 4px;
  color: #9381ff;
  ${swipeDown({ time: '0.15s', type: 'ease-out' })}

  & > li {
    width: 100%;
    height: 45px;
    display: flex;
    align-items: center;
    padding: 8px;
    cursor: pointer;
    transition: background-color 0.3s;
    z-index: 1;

    & svg {
      margin-right: 6px;
    }

    &:hover {
      color: #f8f7ff;
      background-color: #b8b8ff;
    }
  }
`
