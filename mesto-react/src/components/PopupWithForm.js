function PopupWithForm(props) {
  return(
    <section className={`popup popup-${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className={`popup-${props.name}__container`}>
        <button onClick={props.onClose} type="button" className="popup__close"></button>
        <h2 className={`popup-${props.name}__title`}>{props.title}</h2>
        {props.children}
      </div>
    </section>
  )
}

export default PopupWithForm;
