import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 6px 8px;
  font-size: 18px;

  & > p {
    font-weight: 300;
  }

  & > span {
    font-weight: 700;
  }
`
