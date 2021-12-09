import { MdOutlineEdit, MdOutlineDelete, MdOutlineAdd } from 'react-icons/md'
import {
  Button,
  Table,
  TableActions,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
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
        <TableRow>
          <TableCell lg>Producto</TableCell>
          <TableCell center>$100</TableCell>
          <TableCell center>10</TableCell>
          <TableActions>
            <Button variant='success'>
              <MdOutlineEdit size='16' />
            </Button>
            <Button variant='warning'>
              <MdOutlineDelete size='16' />
            </Button>
            <Button variant='primary'>
              <MdOutlineAdd size='16' />
            </Button>
          </TableActions>
        </TableRow>
        <TableRow>
          <TableCell lg>Producto</TableCell>
          <TableCell center>$100</TableCell>
          <TableCell center>10</TableCell>
          <TableActions>
            <Button variant='success'>
              <MdOutlineEdit size='16' />
            </Button>
            <Button variant='warning'>
              <MdOutlineDelete size='16' />
            </Button>
            <Button variant='primary'>
              <MdOutlineAdd size='16' />
            </Button>
          </TableActions>
        </TableRow>
        <TableRow>
          <TableCell lg>Producto</TableCell>
          <TableCell center>$100</TableCell>
          <TableCell center>10</TableCell>
          <TableActions>
            <Button variant='success'>
              <MdOutlineEdit size='16' />
            </Button>
            <Button variant='warning'>
              <MdOutlineDelete size='16' />
            </Button>
            <Button variant='primary'>
              <MdOutlineAdd size='16' />
            </Button>
          </TableActions>
        </TableRow>
        <TableRow>
          <TableCell lg>Producto</TableCell>
          <TableCell center>$100</TableCell>
          <TableCell center>10</TableCell>
          <TableActions>
            <Button variant='success'>
              <MdOutlineEdit size='16' />
            </Button>
            <Button variant='warning'>
              <MdOutlineDelete size='16' />
            </Button>
            <Button variant='primary'>
              <MdOutlineAdd size='16' />
            </Button>
          </TableActions>
        </TableRow>
        <TableRow>
          <TableCell lg>Producto</TableCell>
          <TableCell center>$100</TableCell>
          <TableCell center>10</TableCell>
          <TableActions>
            <Button variant='success'>
              <MdOutlineEdit size='16' />
            </Button>
            <Button variant='warning'>
              <MdOutlineDelete size='16' />
            </Button>
            <Button variant='primary'>
              <MdOutlineAdd size='16' />
            </Button>
          </TableActions>
        </TableRow>
        <TableRow>
          <TableCell lg>Producto</TableCell>
          <TableCell center>$100</TableCell>
          <TableCell center>10</TableCell>
          <TableActions>
            <Button variant='success'>
              <MdOutlineEdit size='16' />
            </Button>
            <Button variant='warning'>
              <MdOutlineDelete size='16' />
            </Button>
            <Button variant='primary'>
              <MdOutlineAdd size='16' />
            </Button>
          </TableActions>
        </TableRow>
        <TableRow>
          <TableCell lg>Producto</TableCell>
          <TableCell center>$100</TableCell>
          <TableCell center>10</TableCell>
          <TableActions>
            <Button variant='success'>
              <MdOutlineEdit size='16' />
            </Button>
            <Button variant='warning'>
              <MdOutlineDelete size='16' />
            </Button>
            <Button variant='primary'>
              <MdOutlineAdd size='16' />
            </Button>
          </TableActions>
        </TableRow>
        <TableRow>
          <TableCell lg>Producto</TableCell>
          <TableCell center>$100</TableCell>
          <TableCell center>10</TableCell>
          <TableActions>
            <Button variant='success'>
              <MdOutlineEdit size='16' />
            </Button>
            <Button variant='warning'>
              <MdOutlineDelete size='16' />
            </Button>
            <Button variant='primary'>
              <MdOutlineAdd size='16' />
            </Button>
          </TableActions>
        </TableRow>
        <TableRow>
          <TableCell lg>Producto</TableCell>
          <TableCell center>$100</TableCell>
          <TableCell center>10</TableCell>
          <TableActions>
            <Button variant='success'>
              <MdOutlineEdit size='16' />
            </Button>
            <Button variant='warning'>
              <MdOutlineDelete size='16' />
            </Button>
            <Button variant='primary'>
              <MdOutlineAdd size='16' />
            </Button>
          </TableActions>
        </TableRow>
        <TableRow>
          <TableCell lg>Producto</TableCell>
          <TableCell center>$100</TableCell>
          <TableCell center>10</TableCell>
          <TableActions>
            <Button variant='success'>
              <MdOutlineEdit size='16' />
            </Button>
            <Button variant='warning'>
              <MdOutlineDelete size='16' />
            </Button>
            <Button variant='primary'>
              <MdOutlineAdd size='16' />
            </Button>
          </TableActions>
        </TableRow>
        <TableRow>
          <TableCell lg>Producto</TableCell>
          <TableCell center>$100</TableCell>
          <TableCell center>10</TableCell>
          <TableActions>
            <Button variant='success'>
              <MdOutlineEdit size='16' />
            </Button>
            <Button variant='warning'>
              <MdOutlineDelete size='16' />
            </Button>
            <Button variant='primary'>
              <MdOutlineAdd size='16' />
            </Button>
          </TableActions>
        </TableRow>
        <TableRow>
          <TableCell lg>Producto</TableCell>
          <TableCell center>$100</TableCell>
          <TableCell center>10</TableCell>
          <TableActions>
            <Button variant='success'>
              <MdOutlineEdit size='16' />
            </Button>
            <Button variant='warning'>
              <MdOutlineDelete size='16' />
            </Button>
            <Button variant='primary'>
              <MdOutlineAdd size='16' />
            </Button>
          </TableActions>
        </TableRow>
      </TableBody>
    </Table>
  )
}
