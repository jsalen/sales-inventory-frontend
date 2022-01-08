import { useState } from 'react'
import { useSelector } from 'react-redux'
import { CloseCashierCard } from '../../components/CloseCashierCard'
import { OpeningAmountModal } from '../../components/OpeningAmountModal'
import { ResumeCashFlow } from '../../components/ResumeCashFlow'
import { ResumeSales } from '../../components/ResumeSales'
import { formatDate, getTotal, getTotalChange } from '../../helpers'

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
  const { opening } = useSelector((state) => state.cashier)
  const [openingModal, setOpeningModal] = useState(false)
  const date = new window.Date()
  const [day, time] = formatDate(date)
  const getTotalCash = getTotal(1)
  const getTotalCard = getTotal(2)
  const change = getTotalChange()

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
        <ResumeSales cash={getTotalCash} card={getTotalCard} change={change} />
        <ResumeCashFlow
          cash={getTotalCash}
          card={getTotalCard}
          opening={opening}
          change={change}
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

      {openingModal && <OpeningAmountModal handleModal={handleOpeningModal} />}
    </Container>
  )
}
