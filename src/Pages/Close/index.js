import { useState } from 'react'
import { CloseCashierCard } from '../../components/CloseCashierCard'
import { OpeningAmountModal } from '../../components/OpeningAmountModal'
import { ResumeCashFlow } from '../../components/ResumeCashFlow'
import { ResumeSales } from '../../components/ResumeSales'
import { formatDate } from '../../helpers'

import {
  Container,
  Content,
  Header,
  Footer,
  Options,
  Button,
  Date,
} from './styles'

export const Close = () => {
  const [openingAmount, setOpeningAmount] = useState(0)
  const [openingModal, setOpeningModal] = useState(false)
  const date = new window.Date()
  const [day, time] = formatDate(date)

  const handleOpeningModal = () => setOpeningModal((prev) => !prev)

  return (
    <Container>
      <Date>
        <p>Fecha: {day}</p>
        <p>Hora: {time}</p>
      </Date>
      <Header>
        <h1>Nombre del Local C.A</h1>
        <p>Cierre de Caja</p>
      </Header>
      <Content>
        <ResumeSales cash={680} card={600} total={1280} change={100} />
        <ResumeCashFlow
          cash={680}
          card={600}
          opening={openingAmount}
          change={100}
        />
      </Content>
      <Footer>
        <section>
          <CloseCashierCard title='Efectivo Final' amount='680' />
          <CloseCashierCard title='Diferencia Efectivo' amount='0' />
          <CloseCashierCard title='Diferencia Total' amount='0' />
        </section>
        <Options>
          <Button onClick={handleOpeningModal}>Saldo Apertura</Button>
          <Button primary>Cerrar Caja</Button>
        </Options>
      </Footer>

      {openingModal && (
        <OpeningAmountModal
          setOpeningAmount={setOpeningAmount}
          handleModal={handleOpeningModal}
        />
      )}
    </Container>
  )
}
