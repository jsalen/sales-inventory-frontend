import styled from 'styled-components'

export const Card = styled.article`
  width: 160px;
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 12px 6px;
  background: #9381ff;
  color: #f8f7ff;
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover {
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.3);
    transform: scale(1.05);
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

    & > span {
      font-weight: 700;
    }
  }
`
