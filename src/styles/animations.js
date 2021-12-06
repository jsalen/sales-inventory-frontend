import { css, keyframes } from 'styled-components'

const swipeDownKeyFrame = keyframes`
  0% {
    height: 0;
  }

  100% {
    height: 100%;
  }
`

const fadeInKeyframe = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const swipeDown = ({ time = '0.15s', type = 'ease' } = {}) =>
  css`
    animation: ${time} ${swipeDownKeyFrame} ${type};
  `

export const fadeIn = ({ time = '0.15s', type = 'ease' } = {}) =>
  css`
    animation: ${time} ${fadeInKeyframe} ${type};
  `
