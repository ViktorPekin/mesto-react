import React, {useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [selectedCard, setSelectedCard] = useState({});
  const [isEditProfilePopupOpen , setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);




  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Main
          onEditProfile={setIsEditProfilePopupOpen}
          onAddPlace={setIsAddPlacePopupOpen}
          onEditAvatar={setIsEditAvatarPopupOpen}
          onCardClick={setSelectedCard}
        />
        <Footer />
        <PopupWithForm
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          name={'edit-profile'}
          title={'Редактировать профиль'}
          buttonText={'Сохранить'}
          children={
            <>
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
            </>
          }
        />
        <PopupWithForm
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          name={'card-add'}
          title={'Новое место'}
          buttonText={'Создать'}
          children={
            <>
              <div className="popup__input-container">
                <input className="popup__input popup__input_cards_name" id="link-name-input" placeholder="Название" type="text" minLength="2" maxLength="30" name="name" required/>
                <span className="popup__input-error link-name-input-error"></span>
              </div>
              <div className="popup__input-container">
                <input className="popup__input popup__input_cards_link" id="link-input" placeholder="Ссылка на картинку" type="url" name="link" required/>
                <span className="popup__input-error link-input-error"></span>
              </div>
            </>
          }
        />
        <PopupWithForm
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          name={'avatar'}
          title={'Обновить аватар'}
          buttonText={'Сохранить'}
          children={
              <div className="popup__input-container">
                <input className="popup__input" id="avatar-input" type="url"
                placeholder="Введите ссылку" minLength="2" maxLength="200" name="link" required/>
                <span className="popup__input-error avatar-input-error"></span>
              </div>
          }
        />
        <PopupWithForm
          isOpen={false}
          onClose={closeAllPopups}
          name={'delete-card'}
          title={'Вы уверены?'}
          buttonText={'Да'}
        />
        <ImagePopup
          onClose={closeAllPopups}
          card={selectedCard}
        />
      </div>
    </div>
  );
}

export default App;
