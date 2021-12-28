import { Table, TableBody, TableCell, TableHead, TableRow } from './styles'

export const OrderDetailTable = ({ products }) => {
  return (
    <Table>
      <TableHead>
        <tr>
          <th>Producto</th>
          <th>Precio</th>
        </tr>
      </TableHead>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell lg>{product.name}</TableCell>
            <TableCell center>${product.price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
