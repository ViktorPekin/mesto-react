import {useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup';
import {api} from '../utils/api'
import {CurrentUserContext} from '../contexts/CurrentUserContext';


function App() {
  const [selectedCard, setSelectedCard] = useState({});
  const [isEditProfilePopupOpen , setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [cards, setCards] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    api.getInitialCard().then((res) => {
      setCards(res);
    }).catch((err) => {
      console.log(err);
    });
    api.getInitialProfile().then((res) => {
      setCurrentUser(res);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    }).catch((err) => {
      console.log(err);
    });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then(() => {
      setCards((state) => state.filter((c) => c._id !== card._id));
    }).catch((err) => {
      console.log(err);
    });
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  }

  function handleUpdateUser(value) {
    api.patchProfile(value).then((res) => {
      setCurrentUser(res);
      closeAllPopups();
    }).catch((err) => {
      console.log(err);
    });
  }

  function handleUpdateAvatar(value) {
    api.patchAvatar(value.avatar).then((res) => {
      setCurrentUser(res);
      closeAllPopups();
    }).catch((err) => {
      console.log(err);
    });
  }

  function handleAddPlaceSubmit(value) {
    api.addNewCard(value).then((res) => {
      setCards([res, ...cards]);
      closeAllPopups();
    }).catch((err) => {
      console.log(err);
    });
  }

  return (
    <div className="page">
      <div className="page__container">
        <CurrentUserContext.Provider value={currentUser}>
          <Header />
            <Main
              cards={cards}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
              onEditProfile={setIsEditProfilePopupOpen}
              onAddPlace={setIsAddPlacePopupOpen}
              onEditAvatar={setIsEditAvatarPopupOpen}
              onCardClick={setSelectedCard}
            />
          <Footer />
          <EditProfilePopup onUpdateUser={handleUpdateUser} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}/>
          <AddPlacePopup onAddPlace={handleAddPlaceSubmit} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}/>
          <EditAvatarPopup onUpdateAvatar={handleUpdateAvatar} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
          <ImagePopup
            onClose={closeAllPopups}
            card={selectedCard}
          />
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
