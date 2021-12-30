import styled from 'styled-components'

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
