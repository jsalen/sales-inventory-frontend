import { Modal } from '../Modal'

import { Button, Container, Footer, Form, FormGroup } from './styles'

export const ClientEditModal = ({ client, handleEditModal }) => {
  const { name, last_name, email, phone, notes } = client

  return (
    <Modal>
      <Container>
        <h1>Editar Cliente</h1>
        <Form>
          <FormGroup>
            <label htmlFor='name'>Nombre:</label>
            <input type='text' name='name' value={name} />
          </FormGroup>
          <FormGroup>
            <label htmlFor='last_name'>Apellido:</label>
            <input type='text' name='last_name' value={last_name} />
          </FormGroup>
          <FormGroup>
            <label htmlFor='email'>Correo:</label>
            <input type='text' name='email' value={email} />
          </FormGroup>
          <FormGroup>
            <label htmlFor='phone'>Teléfono:</label>
            <input type='text' name='phone' value={phone} />
          </FormGroup>
          <FormGroup>
            <label htmlFor='note'>Nota:</label>
            <textarea name='note' value={notes}></textarea>
          </FormGroup>
        </Form>
        <Footer>
          <Button primary>Guardar</Button>
          <Button onClick={handleEditModal}>Cancelar</Button>
        </Footer>
      </Container>
    </Modal>
  )
}
