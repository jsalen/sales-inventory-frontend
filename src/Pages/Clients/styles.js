import styled from 'styled-components'

export const Container = styled.section`
  position: relative;
  width: 100%;
  max-width: 1280px;
  height: auto;
  padding: 24px;
  margin: 0 auto;
  margin-bottom: 12px;
  display: grid;
  grid-template-rows: 96px 1fr;
  grid-gap: 12px;
`

export const Tooltip = styled.span`
  position: absolute;
  width: 122px;
  top: calc(50% - 16.5px);
  right: 105%;
  z-index: 3;
  visibility: hidden;
  padding: 6px 12px;
  background: rgba(0, 0, 0, 0.6);
  color: #f8f7ff;
  text-align: center;
  font-weight: 700;
  border-radius: 4px;
`

export const Footer = styled.footer`
  position: fixed;
  bottom: 32px;
  right: 32px;

  & button {
    position: relative;
    display: grid;
    place-items: center;
    color: #f8f7ff;
    background: #9381ff;
    border-radius: 50%;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      color: #9381ff;
      border: 1px solid #9381ff;
      background: #f8f7ff;
      transform: scale(1.1);
    }

    &:hover ${Tooltip} {
      visibility: visible;
    }
  }
`

export const Button = styled.button`
  width: 146px;
  padding: 8px 16px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 4px;
  border-radius: 4px;
  background: #9381ff;
  color: #f8f7ff;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: #9381ff;
    border: 1px solid #9381ff;
    background: #f8f7ff;
    transform: scale(1.1);
  }
`
