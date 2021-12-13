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

export const Date = styled.label`
  position: absolute;
  top: 8px;
  left: 8px;
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

export const Sales = styled.section`
  width: 100%;
  max-width: 678px;
  margin: 0 auto;
  color: #2e265e;

  & header {
    width: 100%;
    padding: 12px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #e6e6e6;
    font-weight: 700;
  }

  & article {
    width: 100%;
    padding: 4px 0;
    display: flex;
    justify-content: space-between;

    &:last-child {
      margin-top: 6px;
      border-top: 1px solid #e6e6e6;
    }
  }
`

export const CashFlow = styled.section`
  width: 100%;
  max-width: 678px;
  margin: 0 auto;
  color: #2e265e;

  & > header {
    width: 100%;
    padding: 12px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #e6e6e6;
    font-weight: 700;
  }
`

export const CashDetails = styled.section`
  width: 100%;

  & > header {
    padding: 6px 0;
    display: flex;
    justify-content: space-between;
    font-weight: 500;
    text-transform: uppercase;
  }

  & > article {
    padding-left: 16px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    line-height: 1.5;
    font-weight: 300;
  }
`

export const CardDetails = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const Footer = styled.footer`
  width: 100%;
  padding: 12px;
  display: grid;
  grid-template-rows: 66px 1fr;

  & > header {
    display: flex;
    justify-content: space-around;
    text-align: right;
  }

  & h3 {
    padding-right: 8px;
  }
`

export const DetailCard = styled.div`
  width: 210px;
  height: 40px;
  padding: 8px;
  border: 1px solid #2e265e;
  border-radius: 4px;
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
