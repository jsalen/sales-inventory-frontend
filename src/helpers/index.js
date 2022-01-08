import { useSelector } from 'react-redux'
import dateFormat from 'dateformat'

export const formatDate = (date) => {
  const day = dateFormat(date, 'dd/mm/yyyy')
  const time = dateFormat(date, 'h:MM TT')

  return [day, time]
}

export const getTotal = (payment) => {
  const { orders } = useSelector((state) => state.orders)
  const sortedOrders = orders.filter((order) => order.payment === payment)
  const total = sortedOrders.reduce((acc, order) => acc + order.total, 0)

  return total
}
