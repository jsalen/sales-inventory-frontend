import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  height: calc(100vh - 45px);
  padding: 24px;
  display: grid;
  justify-content: center;
  grid-template-columns: 25% 75%;
  grid-template-rows: 90px 1fr;
`

export const OrderContainer = styled.section`
  grid-area: 1/1/-1/2;
  width: 100%;
  padding: 12px;
  display: grid;
  grid-template-rows: repeat(auto-fill, 90px);
  grid-gap: 12px;
  background: #edebf9;
  overflow-y: auto;
`

export const DetailsContainer = styled.section`
  grid-area: 1/2/-1/-1;
  width: 100%;
  display: grid;
  grid-template-rows: 90px 1fr 55px;
  background: #f8f7ff;

  & > h1 {
    grid-area: 1/1/-1/-1;
    font-size: 32px;
    display: grid;
    place-items: center;
  }
`
