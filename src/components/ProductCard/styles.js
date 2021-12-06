import styled from 'styled-components'

export const Card = styled.article`
  width: 100%;
  height: 140px;
  padding: 12px 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: #9381ff;
  color: #f8f7ff;
  cursor: pointer;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.4);
  transition: all 0.15s ease;

  &:hover {
    background: #f8f7ff;
    border: 1px solid #b8b8ff;
    color: #9381ff;
  }
`

export const CardHeader = styled.header`
  width: 100%;
  font-size: 17px;
  font-weight: 700;
  text-align: center;
`
export const CardFooter = styled.footer`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
  font-size: 14px;
  font-weight: 300;

  & > p {
    display: flex;
    flex-direction: column;
    font-weight: 300;
    font-size: 16px;
    color: #2e265e;

    & > span {
      font-weight: 700;
    }
  }
`
