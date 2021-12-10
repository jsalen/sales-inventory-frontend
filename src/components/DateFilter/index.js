import DatePicker from 'react-datepicker'
import { MdOutlineClear } from 'react-icons/md'

import 'react-datepicker/dist/react-datepicker.css'
import { Button, Container, Tooltip } from './styles'

export const DateFilter = ({ startDate, handleDelete, handleChange }) => {
  return (
    <Container>
      <DatePicker
        selected={startDate}
        onChange={(date) => handleChange(date)}
        dateFormat='dd/MM/yyyy'
        maxDate={new Date()}
        todayButton='Hoy'
      />
      <Button onClick={handleDelete}>
        <Tooltip>Reiniciar</Tooltip>
        <MdOutlineClear size='16' />
      </Button>
    </Container>
  )
}
