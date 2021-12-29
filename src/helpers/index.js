import dateFormat from 'dateformat'

export const formatDate = (date) => {
  const day = dateFormat(date, 'dd/mm/yyyy')
  const time = dateFormat(date, 'h:MM TT')

  return [day, time]
}
