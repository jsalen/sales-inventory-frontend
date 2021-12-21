import { Modal } from '../Modal'
import { Button, Container } from './styles'

export const ClientDetails = ({ client, handleDetailsModal }) => {
  const { name, last_name, email, phone, notes } = client
  return (
    <Modal>
      <Container>
        <h1>Información del Cliente</h1>
        <article>
          <p>
            Nombre Completo: <span>{`${last_name}, ${name}`}</span>
          </p>
          <p>
            Email: <span>{email || 'No definido'}</span>
          </p>
          <p>
            Teléfono: <span>{phone || 'No definido'}</span>
          </p>
          <p>
            Notas: <span>{notes.length > 0 ? notes : 'Sin notas'}</span>
          </p>
        </article>
        <footer>
          <Button onClick={handleDetailsModal}>Cerrar</Button>
        </footer>
      </Container>
    </Modal>
  )
}
