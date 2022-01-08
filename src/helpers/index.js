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
  const total = sortedOrders.reduce((acc, order) => acc + order.total_paid, 0)

  return total
}

export const getTotalChange = () => {
  const { orders } = useSelector((state) => state.orders)
  const change = orders.reduce((acc, order) => acc + order.change, 0)

  return change
}
