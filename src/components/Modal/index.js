import ReactDOM from 'react-dom'

import { Container } from './styles'

export const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <Container>{children}</Container>,
    document.getElementById('modal')
  )
}
