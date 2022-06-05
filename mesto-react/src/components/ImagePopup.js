function ImagePopup(props) {
  return(
    <section className="popup popup-image">
          <div className="popup-image__container">
            <button onClick={props.onClose} type="button" className="popup__close"></button>
            <img src="#" alt="#" className="popup-image__image"/>
            <h2 className="popup-image__title"></h2>
          </div>
        </section>
  )
}

export default ImagePopup;
