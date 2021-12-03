import { Link } from 'react-router-dom'
import { MenuCard } from '../../components/MenuCard'
import { MdOutlineInventory, MdOutlinePointOfSale } from 'react-icons/md'

import { Container } from './styles'

export const Home = () => {
  return (
    <Container>
      <Link to='/sales'>
        <MenuCard>
          <MdOutlinePointOfSale size='160' />
          <p>Punto de Venta</p>
        </MenuCard>
      </Link>
      <Link to='/inventory'>
        <MenuCard>
          <MdOutlineInventory size='160' />
          <p>Inventario</p>
        </MenuCard>
      </Link>
    </Container>
  )
}
