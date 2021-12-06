import {
  MdOutlineCreate,
  MdOutlineHistory,
  MdOutlineDelete,
  MdOutlineEdit,
} from 'react-icons/md'

import { Button, Card, Header, MenuIcon, MenuList, Name } from './styles'

export const ClientCard = () => {
  return (
    <Card>
      <Header>
        <div>
          <Name>Joseph Salen</Name>
          <Button>Ver detalles</Button>
        </div>
        <MenuIcon>
          <div />
          <div />
          <div />
          <MenuList>
            <li>
              <MdOutlineHistory /> Historial
            </li>
            <li>
              <MdOutlineDelete /> Borrar
            </li>
            <li>
              <MdOutlineEdit /> Editar
            </li>
          </MenuList>
        </MenuIcon>
      </Header>
      <footer>
        <Button bold>
          <MdOutlineCreate /> Agregar notas
        </Button>
      </footer>
    </Card>
  )
}
