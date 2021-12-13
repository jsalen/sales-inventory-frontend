import { useDispatch } from 'react-redux'
import { addToCart } from '../../features/cart/cartSlice'
import { Card, CardFooter, CardHeader } from './styles'

export const ProductCard = ({ product }) => {
  const { name, price, stock } = product
  const dispatch = useDispatch()

  return (
    <Card onClick={() => dispatch(addToCart(product))}>
      <CardHeader>{name}</CardHeader>
      <CardFooter>
        <p>
          Precio: <span>${price}</span>
        </p>
        <p>
          Stock: <span>{stock}</span>
        </p>
      </CardFooter>
    </Card>
  )
}
