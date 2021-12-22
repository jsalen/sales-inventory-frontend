import styled from 'styled-components'
import { fadeIn } from '../../styles/animations'

export const Card = styled.article`
  width: 100%;
  height: 140px;
  padding: 16px 12px;
  display: grid;
  grid-template-rows: 25px 1fr;
  grid-gap: 8px;
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

export const Footer = styled.footer`
  width: 100%;
  color: #2e265e;
  font-size: 14px;
  font-weight: 700;

  & > p {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-weight: 300;
    font-style: italic;
  }
`
