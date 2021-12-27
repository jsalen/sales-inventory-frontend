import { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { createProduct } from '../../features/products/productsSlice'

import { Button, Container, Footer, Form, FormGroup } from './styles'

export const ProductCreateForm = ({ handleModal }) => {
  const [productData, setProductData] = useState({
    name: '',
    price: 0,
    stock: 0,
  })
  const dispatch = useDispatch()
  const form = useRef(null)

  const handleChange = (e) => {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(form.current)
    const product = {
      name: formData.get('name'),
      price: formData.get('price'),
      stock: formData.get('stock'),
    }

    dispatch(createProduct({ product }))
    handleModal()
  }

  return (
    <Container>
      <h1>Crear Producto</h1>
      <Form ref={form} onSubmit={handleSubmit}>
        <FormGroup>
          <label htmlFor='name'>Nombre:</label>
          <input
            type='text'
            name='name'
            value={productData.name}
            onChange={(e) => handleChange(e)}
            required
            autoFocus
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor='email'>Precio:</label>
          <input
            type='text'
            name='price'
            value={productData.price}
            onChange={(e) => handleChange(e)}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor='last_name'>Stock:</label>
          <input
            type='text'
            name='stock'
            value={productData.stock}
            onChange={(e) => handleChange(e)}
            required
          />
        </FormGroup>
        <Footer>
          <Button type='submit' primary>
            Crear
          </Button>
          <Button onClick={handleModal}>Cancelar</Button>
        </Footer>
      </Form>
    </Container>
  )
}
