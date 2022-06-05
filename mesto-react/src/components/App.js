import React, {useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [selectedCard, setSelectedCard] = useState();
  const [isEditProfilePopupOpen , setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  function handleCardClick() {

  }
/*   useEffect(() => {
    function closeAllPopups(evt) {
      setIsEditProfilePopupOpen();
      setIsAddPlacePopupOpen();
      setIsEditAvatarPopupOpen();
      console.log('1')
    }

    document.addEventListener('keydown', (evt) => {
      if (evt.key === 'Escape') {
        closeAllPopups()
      }
    });

    return () => {
      document.removeEventListener('keydown', (evt) => {
        if (evt.key === 'Escape') {
          closeAllPopups()
        }
      });
    }
  }) */
   function closeAllPopups() {
    setIsEditProfilePopupOpen();
    setIsAddPlacePopupOpen();
    setIsEditAvatarPopupOpen();
    console.log('1')
  }



  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Main
          onEditProfile={setIsEditProfilePopupOpen}
          onAddPlace={setIsAddPlacePopupOpen}
          onEditAvatar={setIsEditAvatarPopupOpen}
        />
        <Footer />
        <PopupWithForm
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          name={'edit-profile'}
          title={'Редактировать профиль'}
          children={
            <form className="popup__form popup__form_edit-profile" name="popup-form-profile" noValidate>
              <div className="popup__input-container">
                <input className="popup__input popup__input_content_name" id="name-input" type="text" placeholder="Имя"
                minLength="2" maxLength="40" name="name" required/>
                <span className="popup__input-error name-input-error"></span>
              </div>
              <div className="popup__input-container">
                <input className="popup__input popup__input_content_sub-name" id="sub-name-input" type="text"
                placeholder="Профессиональная деятельность" minLength="2" maxLength="200" name="subName" required/>
                <span className="popup__input-error sub-name-input-error"></span>
              </div>
              <button className="popup__button popup__button_valid" type="submit">Сохранить</button>
            </form>
          }
        />
        <PopupWithForm
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          name={'card-add'}
          title={'Новое место'}
          children={
            <form className="popup__form popup__form_cards-add" name="popup-form-link" noValidate>
              <div className="popup__input-container">
                <input className="popup__input popup__input_cards_name" id="link-name-input" placeholder="Название" type="text" minLength="2" maxLength="30" name="name" required/>
                <span className="popup__input-error link-name-input-error"></span>
              </div>
              <div className="popup__input-container">
                <input className="popup__input popup__input_cards_link" id="link-input" placeholder="Ссылка на картинку" type="url" name="link" required/>
                <span className="popup__input-error link-input-error"></span>
              </div>
              <button className="popup__button popup__button_valid" type="submit">Создать</button>
            </form>
          }
        />
        <PopupWithForm
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          name={'avatar'}
          title={'Обновить аватар'}
          children={
            <form className="popup__form" name="popup-form-avatar" noValidate>
              <div className="popup__input-container">
                <input className="popup__input" id="avatar-input" type="url"
                placeholder="Введите ссылку" minLength="2" maxLength="200" name="link" required/>
                <span className="popup__input-error avatar-input-error"></span>
              </div>
              <button className="popup__button popup__button_valid" type="submit">Сохранить</button>
            </form>
          }
        />
        <PopupWithForm
          isOpen={false}
          onClose={closeAllPopups}
          name={'delite-card'}
          title={'Вы уверены?'}
          children={
            <form className="popup__form popup__form_cards-delite" name="popup-form-delite" noValidate>
              <button className="popup__button popup__button_delite-card popup__button_valid" type="submit">Да</button>
            </form>
          }
        />
        <ImagePopup
          isOpen={true}
          card={selectedCard}
        />
      </div>
    </div>
  );
}

export default App;
