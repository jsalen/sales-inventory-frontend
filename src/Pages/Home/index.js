import { Link } from 'react-router-dom'
import { MenuCard } from '../../components/MenuCard'
import { MetaHead } from '../../components/MetaHead'
import { MdOutlineInventory, MdOutlinePointOfSale } from 'react-icons/md'

import { Container } from './styles'

const meta = (
  <MetaHead
    title='Inicio'
    description='Iniciar el proceso de Ventas y control de Inventario'
    image='https://davecast.s3.amazonaws.com/avatarnegativo.jpg'
    url='https://fake-platzi-store-merch.web.app/'
  />
)

export const Home = () => {
  return (
    <>
      {meta}
      <Container>
        <Link to='/sales-inventory-frontend/sales'>
          <MenuCard>
            <MdOutlinePointOfSale size='160' />
            <p>Punto de Venta</p>
          </MenuCard>
        </Link>
        <Link to='/sales-inventory-frontend/inventory'>
          <MenuCard>
            <MdOutlineInventory size='160' />
            <p>Inventario</p>
          </MenuCard>
        </Link>
      </Container>
    </>
  )
}
