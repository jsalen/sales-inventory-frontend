import { useState } from 'react'
import {
  MdOutlineCreate,
  MdOutlineHistory,
  MdOutlineDelete,
  MdOutlineEdit,
} from 'react-icons/md'

import { Button, Card, Header, MenuIcon, MenuList, Name } from './styles'

export const ClientCard = ({ client }) => {
  const { first_name, last_name } = client
  const [open, setOpen] = useState(false)

  return (
    <Card>
      <Header>
        <div>
          <Name>{`${first_name} ${last_name}`}</Name>
          <Button>Ver detalles</Button>
        </div>
        <MenuIcon onClick={() => setOpen((prev) => !prev)}>
          <div />
          <div />
          <div />
          {open && (
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
          )}
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
