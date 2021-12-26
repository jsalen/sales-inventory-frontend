import { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateProduct } from '../../features/products/productsSlice'

import { Button, Container, Footer, Form, FormGroup } from './styles'

export const ProductEdit = ({ product, handleModal }) => {
  const { id } = product
  const [productData, setProductData] = useState(product)
  const form = useRef(null)
  const dispatch = useDispatch()

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
      price: Number(formData.get('price')),
      stock: Number(formData.get('stock')),
    }

    dispatch(updateProduct({ id, product }))
    handleModal()
  }

  return (
    <Container>
      <h1>Editar Producto</h1>
      <Form ref={form} onSubmit={handleSubmit}>
        <FormGroup>
          <label htmlFor='name'>Nombre:</label>
          <input
            type='text'
            name='name'
            value={productData.name}
            onChange={(e) => handleChange(e)}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor='price'>Precio:</label>
          <input
            type='text'
            name='price'
            value={productData.price}
            onChange={(e) => handleChange(e)}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor='stock'>Cant. Disp.:</label>
          <input
            type='text'
            name='stock'
            value={productData.stock || '0'}
            onChange={(e) => handleChange(e)}
          />
        </FormGroup>
        <Footer>
          <Button type='submit'>Guardar</Button>
          <Button onClick={handleModal}>Cancelar</Button>
        </Footer>
      </Form>
    </Container>
  )
}
