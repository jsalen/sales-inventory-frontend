import { Sales } from './styles'

export const ResumeSales = ({ cash, card, total, change }) => {
  return (
    <Sales>
      <header>
        <p>Resumen de Ventas</p>
        <p>$ {total}</p>
      </header>

      <article>
        <p>EFECTIVO</p>
        <p>+ $ {cash}</p>
      </article>
      <article>
        <p>TARJETA DEBITO</p>
        <p>+ $ {card}</p>
      </article>
      <article>
        <p>VUELTO</p>
        <p>- $ {change}</p>
      </article>
    </Sales>
  )
}
