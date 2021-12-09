import { products } from '../../db'
import { MdOutlineEdit, MdOutlineDelete, MdOutlineAdd } from 'react-icons/md'
import {
  Button,
  Table,
  TableActions,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
} from './styles'

export const InventoryTable = () => {
  return (
    <Table>
      <TableHead>
        <tr>
          <th>Nombre</th>
          <th>Precio ($)</th>
          <th>Cant. Disp.</th>
          <th>Acciones</th>
        </tr>
      </TableHead>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell lg>{product.name}</TableCell>
            <TableCell center>${product.price}</TableCell>
            <TableCell center>{product.stock}</TableCell>
            <TableActions>
              <Button variant='success'>
                <Tooltip>Editar</Tooltip>
                <MdOutlineEdit size='16' />
              </Button>
              <Button variant='warning'>
                <Tooltip>Eliminar</Tooltip>
                <MdOutlineDelete size='16' />
              </Button>
              <Button variant='primary'>
                <Tooltip>Ingresar</Tooltip>
                <MdOutlineAdd size='16' />
              </Button>
            </TableActions>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
