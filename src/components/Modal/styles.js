import styled from 'styled-components'

import { fadeIn } from '../../styles/animations'

export const Container = styled.section`
  background: rgba(32, 35, 41, 0.7);
  position: fixed;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #2e265e;
  ${fadeIn({ time: '0.25s' })}
`
