import styled from 'styled-components'

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
