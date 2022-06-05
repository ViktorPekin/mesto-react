function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }

  return(
    <li className="element">
      <img onClick={handleClick} src={props.img} alt={props.img} className="element__image"/>
      <div className="element__bottom">
        <h2 className="element__text">{props.name}</h2>
        <div className="element__like-container">
          <button type="button" className="element__like"></button>
          <p className="element__like-amount">{props.like}</p>
        </div>
      </div>
      <button type="button" className="element__delite"></button>
    </li>
  )
}

export default Card;
