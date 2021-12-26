import { useState } from 'react'
import { useSelector } from 'react-redux'
import { ClientCreateForm } from '../../components/ClientCreateForm'
import { FilterBoard } from '../../components/FilterBoard'
import { Modal } from '../../components/Modal'
import { ClientsTable } from '../../containers/ClientsTable'
import useFilterClients from '../../hooks/useFilterClients'

import { MdOutlineAdd } from 'react-icons/md'

import { Container, Footer, Tooltip } from './styles'

export const Clients = () => {
  const [createClientModal, setCreateClientModal] = useState(false)
  const clients = useSelector((state) => state.clients.clients)
  const {
    query,
    setQuery,
    filteredData: filteredClients,
  } = useFilterClients(clients)

  const handleModal = () => {
    setCreateClientModal((prev) => !prev)
  }

  return (
    <>
      <Container>
        <FilterBoard
          title='Clientes'
          placeHolder='Cliente...'
          query={query}
          setQuery={setQuery}
        />
        <ClientsTable clients={filteredClients} />

        <Footer>
          <button onClick={handleModal}>
            <Tooltip>Crear Cliente</Tooltip>
            <MdOutlineAdd size='48' />
          </button>
        </Footer>
      </Container>

      {createClientModal && (
        <Modal>
          <ClientCreateForm handleModal={handleModal} />
        </Modal>
      )}
    </>
  )
}
