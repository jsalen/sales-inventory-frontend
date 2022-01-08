import { fixNumber } from '../../helpers'
import { CardDetails, CashDetails, CashFlow } from './styles'

export const ResumeCashFlow = ({ cash, card, opening, change }) => {
  const totalCash = cash + opening - change
  const finalAmount = totalCash + card

  return (
    <CashFlow>
      <header>
        <p>Resumen de Caja</p>
        <p>${fixNumber(finalAmount)}</p>
      </header>

      <CashDetails>
        <header>
          <p>Total Efectivo</p>
          <p>+ $ {fixNumber(totalCash)}</p>
        </header>

        <article>
          <p>EFECTIVO</p>
          <p>+ $ {cash}</p>
        </article>
        <article>
          <p>Saldo Apertura</p>
          <p>+ $ {opening}</p>
        </article>
        <article>
          <p>Vuelto</p>
          <p>- $ {change}</p>
        </article>
      </CashDetails>

      <CardDetails>
        <p>TARJETA DEBITO</p>
        <p>+ $ {card}</p>
      </CardDetails>
    </CashFlow>
  )
}
