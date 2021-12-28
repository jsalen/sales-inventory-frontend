import { Table, TableBody, TableCell, TableHead, TableRow } from './styles'

export const OrderDetailTable = ({ products }) => {
  return (
    <Table>
      <TableHead>
        <tr>
          <th>Producto</th>
          <th>Precio und.</th>
          <th>Cantidad</th>
          <th>Precio total</th>
        </tr>
      </TableHead>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell lg>{product.name}</TableCell>
            <TableCell center>${product.price}</TableCell>
            <TableCell center>2</TableCell>
            <TableCell center>$20</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
