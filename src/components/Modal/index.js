import ReactDOM from 'react-dom'

import { Container } from './styles'

export const Modal = ({ children, setOpenModal }) => {
  const handleClick = () => setOpenModal((prevState) => !prevState)

  return ReactDOM.createPortal(
    <Container onClick={handleClick}>{children}</Container>,
    document.getElementById('modal')
  )
}
