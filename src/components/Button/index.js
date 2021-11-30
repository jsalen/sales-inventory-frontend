import { Btn } from './styles'

export const Button = ({ children, variant, hsize }) => {
  return (
    <Btn variant={variant} hsize={hsize}>
      {children}
    </Btn>
  )
}
