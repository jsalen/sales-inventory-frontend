import { Card, CardFooter, CardHeader } from './styles'

export const ProductCard = ({ product }) => {
  const { name, price, stock } = product

  return (
    <Card>
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
