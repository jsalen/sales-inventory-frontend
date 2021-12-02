import { css, keyframes } from 'styled-components'

const swipeDownKeyFrame = keyframes`
  0% {
    height: 0;
  }

  100% {
    height: 275px;
  }
`

export const swipeDown = ({ time = '0.15s', type = 'ease' } = {}) =>
  css`
    animation: ${time} ${swipeDownKeyFrame} ${type};
  `
