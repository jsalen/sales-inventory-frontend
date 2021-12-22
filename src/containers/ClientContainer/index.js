import { useState } from 'react'
import { ClientCard } from '../../components/ClientCard'
import { ClientDeleteModal } from '../../components/ClientDeleteModal'
import { ClientDetails } from '../../components/ClientDetails'

export const ClientContainer = ({ client }) => {
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
      <ClientCard
        client={client}
        handleDeleteModal={handleDeleteModal}
        handleDetailsModal={handleDetailsModal}
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
    </>
  )
}
