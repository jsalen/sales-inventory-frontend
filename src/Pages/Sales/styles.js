import styled from 'styled-components'
import { fadeIn } from '../../styles/animations'

export const Container = styled.main`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: 75% 1fr;

  & > section {
    grid-area: ${(props) => (props.products ? '1/1/-1/2' : '1/1/-1/-1')};
  }

  & > aside {
    ${fadeIn({ time: '0.5s' })}
  }
`
