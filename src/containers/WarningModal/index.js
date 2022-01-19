import { Modal } from '../../components/Modal'

import { Button, Container } from './styles'

export const WarningModal = ({ setWarningModal }) => {
  return (
    <Modal>
      <Container>
        <h1>Atención</h1>
        <p>
          Este sitio web no está optimizado para el uso en dispositivos móviles,
          ya que su funcionalidad está creada para el uso en una Caja
          Registradora de un local comercial.
        </p>
        <Button onClick={(prev) => setWarningModal(!prev)}>Aceptar</Button>
      </Container>
    </Modal>
  )
}
