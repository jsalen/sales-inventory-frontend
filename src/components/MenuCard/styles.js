import styled from 'styled-components'

export const Card = styled.article`
  width: 260px;
  max-width: 320px;
  padding: 16px;
  display: grid;
  place-items: center;
  grid-gap: 8px;
  cursor: pointer;
  text-transform: uppercase;
  border: 1px solid #9381ff;
  border-radius: 12px;
  transition: all 0.2s ease;

  & > p {
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 1.1px;
  }

  &:hover {
    color: #f8f7ff;
    background-color: #9381ff;
  }
`
