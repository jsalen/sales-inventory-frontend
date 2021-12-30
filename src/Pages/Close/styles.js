import styled from 'styled-components'

export const Container = styled.main`
  position: relative;
  width: 100%;
  height: calc(100vh - 69px);
  max-width: 960px;
  margin: 12px auto;
  display: grid;
  grid-template-rows: 110px 1fr 160px;
  background: #f8f7ff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`

export const Date = styled.section`
  position: absolute;
  top: 12px;
  left: 12px;
  color: #2e265e;
`

export const Header = styled.header`
  width: 100%;
  padding: 18px 0;
  display: grid;
  place-items: center;
  color: #2e265e;
  border-bottom: 1px solid #e6e6e6;
`

export const Content = styled.section`
  width: 100%;
  padding: 18px;
  display: grid;
  grid-template-rows: 1fr 1fr;
  overflow-y: scroll;
`

export const Footer = styled.footer`
  width: 100%;
  padding: 12px;
  display: grid;
  grid-template-rows: 66px 1fr;

  & > section {
    display: flex;
    justify-content: space-around;
    text-align: right;
  }
`

export const Options = styled.main`
  width: 100%;
  padding: 0 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`

export const Button = styled.button`
  padding: 8px 12px;
  text-transform: uppercase;
  border: ${(props) => (props.primary ? '1px solid #b8b8ff' : 0)};
  border-radius: 4px;
  background: ${(props) => (props.primary ? '#f8f7ff' : 'rgba(17,158,11,0.8)')};
  color: ${(props) => (props.primary ? '#9381FF' : '#f8f7ff')};
  cursor: pointer;

  &:hover {
    color: ${(props) => (props.primary ? '#f8f7ff' : '#f8f7ff')};
    background: ${(props) =>
      props.primary ? '#9381FF' : 'rgba(17,158,11,0.8)'};
  }
`
