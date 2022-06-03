import Header from './Header';
import Footer from './Footer';
import Main from './Main';

function App() {
  return (
    <div className="page">
      <div className="page__container">
      <Header />
      <Main />
      <Footer />
      <section className="popup popup_edit-profile">
        <div className="popup__container">
          <button type="button" className="popup__close"></button>
          <h2 className="popup__title">Редактировать профиль</h2>
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
        </div>
      </section>
      <section className="popup popup_cards-add">
        <div className="popup__container">
          <button type="button" className="popup__close"></button>
          <h2 className="popup__title">Новое место</h2>
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
        </div>
      </section>
      <section className="popup popup-avatar">
        <div className="popup-avatar__container">
          <button type="button" className="popup__close"></button>
          <h2 className="popup-avatar__title">Обновить аватар</h2>
          <form className="popup__form" name="popup-form-avatar" noValidate>
            <div className="popup__input-container">
              <input className="popup__input" id="avatar-input" type="url"
              placeholder="Введите ссылку" minLength="2" maxLength="200" name="link" required/>
              <span className="popup__input-error avatar-input-error"></span>
            </div>
            <button className="popup__button popup__button_valid" type="submit">Сохранить</button>
          </form>
        </div>
      </section>
      <section className="popup popup-image">
        <div className="popup-image__container">
          <button type="button" className="popup__close"></button>
          <img src="#" alt="#" className="popup-image__image"/>
          <h2 className="popup-image__title"></h2>
        </div>
      </section>
      <section className="popup popup-delite-card">
        <div className="popup-delite-card__container">
          <button type="button" className="popup__close"></button>
          <h2 className="popup-delite-card__title">Вы уверены?</h2>
          <form className="popup__form popup__form_cards-delite" name="popup-form-delite" noValidate>
            <button className="popup__button popup__button_delite-card popup__button_valid" type="submit">Да</button>
          </form>
        </div>
      </section>
      <template className="template-element">
        <li className="element">
          <img src="#" className="element__image"/>
          <div className="element__bottom">
            <h2 className="element__text"></h2>
            <div className="element__like-container">
              <button type="button" className="element__like"></button>
              <p className="element__like-amount"></p>
            </div>
          </div>
          <button type="button" className="element__delite"></button>
        </li>
      </template>
    </div>
      </div>
  );
}

export default App;
