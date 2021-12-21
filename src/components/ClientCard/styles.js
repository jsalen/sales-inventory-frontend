import styled from 'styled-components'
import { fadeIn } from '../../styles/animations'

export const Card = styled.article`
  width: 100%;
  height: 140px;
  padding: 16px 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #9381ff;
  border-radius: 4px;
  color: #f8f7ff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.4);
  ${fadeIn({ time: '0.4s' })}
  transition: all 0.15s ease;

  &:hover {
    background: #f8f7ff;
    border: 1px solid #b8b8ff;
    color: #9381ff;
  }
`

export const Header = styled.header`
  width: 100%;
  display: grid;
  grid-template-columns: 90% 1fr;
`

export const Name = styled.p`
  margin-bottom: 6px;
  font-size: 17px;
  font-weight: 700;
`

export const Button = styled.button`
  padding-bottom: 4px;
  display: flex;
  align-items: center;
  color: #2e265e;
  font-weight: ${(props) => (props.bold ? '700' : 400)};
  border: 1px solid transparent;
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
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  cursor: pointer;

  & > div {
    width: 3px;
    height: 3px;
    background-color: #2e265e;
    margin: 1px;
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
  ${fadeIn({ time: '0.1s', type: 'ease' })}

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

export const ModalContainer = styled.article`
  width: 320px;
  height: auto;
  padding: 16px;
  display: grid;
  align-items: center;
  grid-template-rows: 30px 1fr 45px;
  grid-gap: 16px;
  background: #f8f7ff;
  text-align: center;

  & h1 {
    font-size: 18px;
    font-weight: 700;
  }

  & footer {
    display: flex;
    justify-content: space-around;
  }
`

export const ModalButton = styled.button`
  width: 130px;
  height: 35px;
  color: ${(props) => (props.primary ? '#2e265e' : '#f8f7ff')};
  background: ${(props) => (props.primary ? '#f8f7ff' : '#9381ff')};
  border: ${(props) => (props.primary ? '1px solid #9381ff' : '0')};
  cursor: pointer;
`
