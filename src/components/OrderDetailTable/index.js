import { Table, TableBody, TableCell, TableHead, TableRow } from './styles'

export const OrderDetailTable = () => {
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
        {[1, 2, 3].map((item) => (
          <TableRow key={item}>
            <TableCell lg>Producto</TableCell>
            <TableCell center>$10</TableCell>
            <TableCell center>2</TableCell>
            <TableCell center>$20</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
