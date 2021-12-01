import styled from 'styled-components'

export const Card = styled.article`
  width: 160px;
  height: 140px;
  background: #555555;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: #fbfbfb;
  padding: 12px 6px;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
    background-color: #444444;
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
    border: 1px solid #aaa;

    & > span {
      font-weight: 700;
    }
  }
`
