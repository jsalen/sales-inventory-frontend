import styled from 'styled-components'

export const Aside = styled.aside`
  background-color: #fff;
  padding-top: 16px;
`

export const Title = styled.h2`
  text-align: center;
`

export const Button = styled.button`
  width: 100%;
  height: 45px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  font-weight: 400;
  cursor: pointer;
  transition: background-color 0.2s;
`

export const Item = styled.li`
  width: 100%;
  min-height: 45px;
  display: grid;
  padding: 0 8px;
  grid-template-columns: 1fr 210px 1fr 1fr;
  align-items: center;
  gap: 8px;
  transition: background-color 0.2s;

  & svg {
    color: #e61313;
    cursor: pointer;
  }

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
