import styled from 'styled-components'

export const Container = styled.section`
  position: relative;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  height: calc(100vh - 45px);
  padding: 24px;
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr;
  grid-template-rows: 120px 1fr 45px;
  grid-gap: 16px;
`

export const InventoryContainer = styled.section`
  width: 100%;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  overflow: hidden scroll;
`

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 0 12px;
`

export const Btn = styled.button`
  width: 100px;
  height: 35px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: ${(props) => (props.primary ? '400' : '700')};
  color: ${(props) => (props.primary ? '#9381FF' : '#F8F7FF')};
  background: ${(props) => (props.primary ? '#F8F7FF' : '#f23546')};
  border: ${(props) => (props.primary ? '1px solid #b8b8ff' : '')};
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    color: ${(props) => (props.primary ? '#F8F7FF' : '#F8F7FF')};
    background: ${(props) => (props.primary ? '#9381FF' : '#f23546')};
  }
`
