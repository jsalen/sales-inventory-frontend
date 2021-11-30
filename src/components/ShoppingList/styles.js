import styled from 'styled-components'

export const Aside = styled.aside`
  background-color: #fff;
  padding-top: 16px;
  position: relative;
`

export const Title = styled.h2`
  text-align: center;
`

export const Item = styled.li`
  width: 100%;
  min-height: 45px;
  display: grid;
  padding: 0 8px;
  grid-template-columns: 1fr 6fr 1fr 1fr;
  align-items: center;
  gap: 8px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f5f5f5;
  }
`

export const List = styled.ul`
  width: 100%;
  padding-top: 6px;
`

export const Quantity = styled.p`
  width: 100%;
  text-align: center;
  border: 1px solid #c8c8c8;
  border-radius: 4px;
`

export const Delete = styled.div`
  width: 20px;
  height: auto;
  display: flex;
  justify-content: center;
  align-content: center;
  cursor: pointer;
  color: #e61313;
`

export const Footer = styled.footer`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 45px 1fr;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  & > button:nth-child(1) {
    grid-column: 1 / -1;
  }
`
