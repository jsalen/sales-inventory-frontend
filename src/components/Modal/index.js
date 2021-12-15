import ReactDOM from 'react-dom'

import { Container } from './styles'

export const Modal = ({ children, setOpenModal }) => {
  return ReactDOM.createPortal(
    <Container>{children}</Container>,
    document.getElementById('modal')
  )
}
