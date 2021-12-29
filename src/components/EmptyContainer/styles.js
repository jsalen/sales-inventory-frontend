import styled from 'styled-components'

export const Figure = styled.figure`
  width: 100%;
  max-width: 335px;
  margin: 0 auto;

  & > img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  & > figcaption {
    text-align: center;
    font-size: 16px;
  }
`
