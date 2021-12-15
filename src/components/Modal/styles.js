import styled from 'styled-components'

import { fadeIn } from '../../styles/animations'

export const Container = styled.section`
  position: fixed;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #2e265e;
  background-color: rgba(120, 120, 120, 0.4);
  ${fadeIn({ time: '0.25s' })}
`
