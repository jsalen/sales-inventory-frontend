import styled from 'styled-components'

export const Container = styled.section`
  width: 420px;
  padding: 16px;
  display: grid;
  grid-template-rows: 38px 1fr 45px;
  grid-gap: 16px;
  background: #f8f7ff;
  border-radius: 4px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.4);

  & > h1 {
    text-align: center;
    font-weight: 700;
    border-bottom: 1px solid #cecece;
  }

  & span {
    font-weight: 700;
    letter-spacing: 1.1px;
  }

  & > article {
    display: grid;
    grid-gap: 4px;
  }

  & > footer {
    margin: 0 auto;
  }
`

export const Button = styled.button`
  width: 130px;
  height: 35px;
  color: #f8f7ff;
  background: #9381ff;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #7365c8;
  }
`
