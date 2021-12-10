import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  height: calc(100vh - 45px);
  padding: 24px;
  display: grid;
  justify-content: center;
  grid-template-columns: 40% 60%;
  grid-template-rows: 90px 1fr 45px;
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
