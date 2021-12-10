import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const Header = styled.header`
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
  padding: 0 30px;

  & h2 {
    font-weight: 700;
  }
`

export const Name = styled.p`
  font-weight: 700;
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
  padding-right: 30px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-top: 1px solid #e6e6e6;

  & p {
    font-size: 20px;

    & span {
      font-weight: 700;
    }
  }
`
