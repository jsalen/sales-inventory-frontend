import { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addClient } from '../../features/clients/clientsSlice'
import { Button, Container, Footer, Form, FormGroup } from './styles'

export const ClientCreateForm = ({ handleModal }) => {
  const [clientData, setClientData] = useState({
    name: '',
    last_name: '',
    email: '',
    phone: '',
    notes: '',
  })
  const dispatch = useDispatch()
  const form = useRef(null)

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

    dispatch(addClient({ client }))
    handleModal()
  }

  return (
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
            required
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor='last_name'>Apellido:</label>
          <input
            type='text'
            name='last_name'
            value={clientData.last_name}
            onChange={(e) => handleChange(e)}
            required
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
          <Button onClick={handleModal}>Cancelar</Button>
        </Footer>
      </Form>
    </Container>
  )
}
