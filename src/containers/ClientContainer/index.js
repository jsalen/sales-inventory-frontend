import { useState } from 'react'
import { ClientCard } from '../../components/ClientCard'
import { ClientDeleteModal } from '../../components/ClientDeleteModal'
import { ClientDetails } from '../../components/ClientDetails'
import { ClientEditModal } from '../../components/ClientEditModal'

export const ClientContainer = ({ client }) => {
  const [deleteModal, setDeleteModal] = useState(false)
  const [detailsModal, setDetailsModal] = useState(false)
  const [editModal, setEditModal] = useState(false)

  const handleDeleteModal = () => {
    setDeleteModal((prev) => !prev)
  }

  const handleDetailsModal = () => {
    setDetailsModal((prev) => !prev)
  }

  const handleEditModal = () => {
    setEditModal((prev) => !prev)
  }

  return (
    <>
      <ClientCard
        client={client}
        handleDeleteModal={handleDeleteModal}
        handleDetailsModal={handleDetailsModal}
        handleEditModal={handleEditModal}
      />

      {deleteModal && (
        <ClientDeleteModal client={client} handleModal={handleDeleteModal} />
      )}

      {detailsModal && (
        <ClientDetails
          client={client}
          handleDetailsModal={handleDetailsModal}
        />
      )}

      {editModal && (
        <ClientEditModal client={client} handleEditModal={handleEditModal} />
      )}
    </>
  )
}
