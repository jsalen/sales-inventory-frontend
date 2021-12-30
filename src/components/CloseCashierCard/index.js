import { DetailCard } from './styles'

export const CloseCashierCard = ({ title, amount }) => {
  return (
    <article>
      <h3 style={{ paddingRight: '8px' }}>{title}</h3>
      <DetailCard>
        <p>$ {amount}</p>
      </DetailCard>
    </article>
  )
}
