import { useState } from 'react'
import { useSelector } from 'react-redux'
import { ClientCreateForm } from '../../components/ClientCreateForm'
import { EmptyContainer } from '../../components/EmptyContainer'
import { FilterBoard } from '../../components/FilterBoard'
import { MetaHead } from '../../components/MetaHead'
import { Modal } from '../../components/Modal'
import { ClientsTable } from '../../containers/ClientsTable'
import empty from '../../images/no-clients.png'
import useFilterClients from '../../hooks/useFilterClients'

import { MdOutlineAdd } from 'react-icons/md'

import { Button, Container, Footer, Tooltip } from './styles'

const meta = (
  <MetaHead
    title='Clientes'
    description='Lista de Clientes'
    image='https://davecast.s3.amazonaws.com/avatarnegativo.jpg'
    url='https://fake-platzi-store-merch.web.app/'
  />
)

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
      {meta}
      <Container>
        <FilterBoard
          title='Clientes'
          placeHolder='Cliente...'
          query={query}
          setQuery={setQuery}
        />

        {filteredClients.length > 0 ? (
          <ClientsTable clients={filteredClients} />
        ) : (
          <>
            <EmptyContainer image={empty} alt='Vacio' title='No hay clientes' />
            <Button onClick={handleModal}>
              <MdOutlineAdd size='16' /> Crear Cliente
            </Button>
          </>
        )}

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
