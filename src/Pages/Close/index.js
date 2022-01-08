import { useState } from 'react'
import { useSelector } from 'react-redux'
import { MetaHead } from '../../components/MetaHead'
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

const meta = (
  <MetaHead
    title='Cierre de Caja'
    description='Cerrar caja correspondiente a la venta del día'
    image='https://davecast.s3.amazonaws.com/avatarnegativo.jpg'
    url='https://fake-platzi-store-merch.web.app/'
  />
)

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
    <>
      {meta}
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
          <ResumeSales
            cash={getTotalCash}
            card={getTotalCard}
            change={change}
          />
          <ResumeCashFlow
            cash={getTotalCash}
            card={getTotalCard}
            opening={opening}
            change={change}
          />
        </Content>
        <Footer>
          <Options>
            <Button onClick={handleOpeningModal}>Saldo Apertura</Button>
            <Button primary>Cerrar Caja</Button>
          </Options>
        </Footer>

        {openingModal && (
          <OpeningAmountModal handleModal={handleOpeningModal} />
        )}
      </Container>
    </>
  )
}
