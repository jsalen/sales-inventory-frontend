import { Figure } from './styles'

export const EmptyContainer = ({ image, alt, title }) => {
  return (
    <Figure>
      <img src={image} alt={alt} />
      <figcaption>
        <h2>{title}</h2>
      </figcaption>
    </Figure>
  )
}
