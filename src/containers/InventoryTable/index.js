import { useState } from 'react'
import { Modal } from '../../components/Modal'
import { ProductEdit } from '../../components/ProductEdit'

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

export const InventoryTable = ({ products }) => {
  const [deleteModal, setDeleteModal] = useState(false)
  const [editModal, setEditModal] = useState(false)
  const [editProduct, setEditProduct] = useState({})
  const [addModal, setAddModal] = useState(false)

  const handleDeleteModal = () => {
    setDeleteModal((prev) => !prev)
  }

  const handleEditModal = (product) => {
    setEditProduct(product)
    setEditModal((prev) => !prev)
  }

  const handleAddModal = () => {
    setAddModal((prev) => !prev)
  }

  return (
    <>
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
                <Button
                  variant='success'
                  onClick={() => handleEditModal(product)}
                >
                  <Tooltip>Editar</Tooltip>
                  <MdOutlineEdit size='16' />
                </Button>
                <Button variant='warning' onClick={handleDeleteModal}>
                  <Tooltip>Eliminar</Tooltip>
                  <MdOutlineDelete size='16' />
                </Button>
                <Button variant='primary' onClick={handleAddModal}>
                  <Tooltip>Ingresar</Tooltip>
                  <MdOutlineAdd size='16' />
                </Button>
              </TableActions>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {editModal && (
        <Modal>
          <ProductEdit product={editProduct} handleModal={handleEditModal} />
        </Modal>
      )}

      {deleteModal && <Modal>Delete product</Modal>}

      {addModal && <Modal>Add product</Modal>}
    </>
  )
}
