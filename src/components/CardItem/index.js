// Write your code here.
const CardItem = props => {
  const {title, description, imgUrl, className} = props

  return (
    <li className={className}>
      <h1 className="card-heading">{title}</h1>
      <p className="card-details">{description}</p>
      <div>
        <img src={imgUrl} className="images" alt="logo" />
      </div>
    </li>
  )
}

export default CardItem
