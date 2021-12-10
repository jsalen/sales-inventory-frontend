import styled from 'styled-components'
import { fadeIn } from '../../styles/animations'

export const Card = styled.article`
  width: 100%;
  height: 90px;
  padding: 12px;
  display: flex;
  justify-content: space-between;
  background: #9381ff;
  color: #f8f7ff;
  border: 1px solid transparent;
  border-radius: 4px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: all 0.2 ease;
  ${fadeIn({ time: '0.25s' })}

  &:hover {
    background: #f8f7ff;
    border: 1px solid #9381ff;
    color: #9381ff;
  }
`

export const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & h3 {
    font-size: 20px;
    font-weight: 700;
  }

  & p {
    font-size: 14px;
    font-weight: 300;
    color: #eae3f0;
    ${Card}:hover & {
      color: #9381ff;
    }
  }
`

export const Footer = styled.footer`
  width: 98px;
  font-weight: 300;
  color: #eae3f0;
  align-self: center;

  ${Card}:hover & {
    color: #9381ff;
  }
`
