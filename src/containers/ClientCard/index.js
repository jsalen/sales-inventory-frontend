import { useState } from 'react'
import { ClientModal } from '../../components/ClientModal'
import { ClientDetails } from '../../components/ClientDetails'

import {
  MdOutlineCreate,
  MdOutlineHistory,
  MdOutlineDelete,
  MdOutlineEdit,
} from 'react-icons/md'

import { Button, Card, Header, MenuIcon, MenuList, Name } from './styles'

export const ClientCard = ({ client }) => {
  const { id, name, last_name, notes } = client
  const [open, setOpen] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)
  const [detailsModal, setDetailsModal] = useState(false)

  const handleDeleteModal = () => {
    setDeleteModal((prev) => !prev)
  }

  const handleDetailsModal = () => {
    setDetailsModal((prev) => !prev)
  }

  return (
    <>
      <Card>
        <Header>
          <div>
            <Name>{`${last_name}, ${name}`}</Name>
            <Button onClick={() => setDetailsModal((prev) => !prev)}>
              Ver detalles
            </Button>
          </div>
          <MenuIcon onClick={() => setOpen((prev) => !prev)}>
            <div />
            <div />
            <div />
            {open && (
              <MenuList>
                <li>
                  <MdOutlineHistory /> Historial
                </li>
                <li onClick={() => handleDeleteModal(id)}>
                  <MdOutlineDelete /> Borrar
                </li>
                <li>
                  <MdOutlineEdit /> Editar
                </li>
              </MenuList>
            )}
          </MenuIcon>
        </Header>
        <footer>
          <Button bold>
            <MdOutlineCreate /> Agregar notas
          </Button>
        </footer>
      </Card>

      {deleteModal && (
        <ClientModal id={id} name={name} handleModal={handleDeleteModal} />
      )}

      {detailsModal && (
        <ClientDetails
          client={client}
          handleDetailsModal={handleDetailsModal}
        />
      )}
    </>
  )
}
