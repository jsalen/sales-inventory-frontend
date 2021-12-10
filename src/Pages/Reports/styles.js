import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  height: calc(100vh - 45px);
  padding: 24px;
  display: grid;
  justify-content: center;
  grid-template-columns: 30% 70%;
  grid-template-rows: 90px 1fr 70px;
`

export const FilterContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #f8f7ff;
  background: #9381ff;
`

export const OrderContainer = styled.section`
  grid-area: 2/1/-1/2;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
  background: #f8f7ff;
  overflow-y: scroll;
`

export const DetailsContainer = styled.section`
  grid-area: 1/2/3/-1;
  width: 100%;
  display: grid;
  grid-template-rows: 90px 1fr 55px;
  grid-gap: 8px;
  background: #f8f7ff;
`
