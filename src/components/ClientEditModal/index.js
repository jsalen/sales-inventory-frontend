import { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateClient } from '../../features/clients/clientsSlice'
import { Modal } from '../Modal'

import { Button, Container, Footer, Form, FormGroup } from './styles'

export const ClientEditModal = ({ client, index, handleEditModal }) => {
  const { id } = client
  const [clientData, setClientData] = useState(client)

  const form = useRef(null)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setClientData({
      ...clientData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(form.current)
    const client = {
      name: formData.get('name'),
      last_name: formData.get('last_name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      notes: formData.get('notes'),
    }

    dispatch(updateClient({ id, client, index }))
    handleEditModal()
  }

  return (
    <Modal>
      <Container>
        <h1>Editar Cliente</h1>
        <Form ref={form} onSubmit={handleSubmit}>
          <FormGroup>
            <label htmlFor='name'>Nombre:</label>
            <input
              type='text'
              name='name'
              value={clientData.name}
              onChange={(e) => handleChange(e)}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor='last_name'>Apellido:</label>
            <input
              type='text'
              name='last_name'
              value={clientData.last_name}
              onChange={(e) => handleChange(e)}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor='email'>Correo:</label>
            <input
              type='text'
              name='email'
              value={clientData.email || ''}
              onChange={(e) => handleChange(e)}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor='phone'>Teléfono:</label>
            <input
              type='text'
              name='phone'
              value={clientData.phone || ''}
              onChange={(e) => handleChange(e)}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor='note'>Nota:</label>
            <textarea
              name='notes'
              value={clientData.notes || ''}
              onChange={(e) => handleChange(e)}
            ></textarea>
          </FormGroup>
          <Footer>
            <Button type='submit'>Guardar</Button>
            <Button onClick={handleEditModal}>Cancelar</Button>
          </Footer>
        </Form>
      </Container>
    </Modal>
  )
}
