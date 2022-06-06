function ImagePopup(props) {
  return(
    <section className={`popup popup-image ${props.card.key ? 'popup_opened' :  ''}`}>
      <div className="popup-image__container">
        <button onClick={props.onClose} type="button" className="popup__close"></button>
        <img src={props.card.img} alt="#" className="popup-image__image"/>
        <h2 className="popup-image__title">{props.card.name}</h2>
      </div>
    </section>
  )
}

export default ImagePopup;
