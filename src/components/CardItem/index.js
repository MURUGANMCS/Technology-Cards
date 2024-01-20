// Write your code here.
import './index.css'

const CardItem = props => {
  const {card} = props
  const {title, description, imgUrl, className} = card

  return (
    <div>
      <li className={`list ${className}`}>
        <h1 className="card-heading">{title}</h1>
        <p className="card-details">{description}</p>
        <div className="image-container">
          <img src={imgUrl} className="images" alt={title} />
        </div>
      </li>
    </div>
  )
}

export default CardItem
