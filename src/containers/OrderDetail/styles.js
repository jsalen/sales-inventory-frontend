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
