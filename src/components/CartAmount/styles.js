import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 18px;

  & > p {
    font-weight: 300;
  }

  & > span {
    font-weight: 700;
  }
`

export const Button = styled.button`
  padding: 4px 8px 0;
  border-bottom: 1px dashed #2e265e;
  color: #9381ff;
  cursor: pointer;
  font-size: 16px;
`
