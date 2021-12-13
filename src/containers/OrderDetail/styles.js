import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const Header = styled.header`
  height: 90px;
  display: flex;
  padding: 0 30px;
  justify-content: space-between;
  align-items: center;
  color: #2e265e;
  border-bottom: 1px solid #e6e6e6;

  & h2 {
    font-weight: 700;
  }
`

export const Date = styled.div`
  text-align: right;
`

export const Content = styled.main`
  width: 100%;
  height: inherit;
  overflow-y: scroll;
`

export const Footer = styled.footer`
  width: 100%;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #e6e6e6;

  & p {
    font-size: 18px;
    color: #2e265e;

    & span {
      font-weight: 700;
    }
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  & span {
    font-weight: 700;
  }
`
