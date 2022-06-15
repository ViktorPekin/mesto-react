import React, {useEffect, useState, useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import {api} from '../utils/api'
import Card from '../components/Card'

function Main(props) {
  const [cards, setCards] = useState([]);
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    api.getInitialCard().then((res) => {
      setCards(res);
    });
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    isLiked ?
      api.addLike(card._id).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c))}) :
      api.deleteLike(card._id).then((newCard) => {
      setCards((newCard) => console.log(newCard)/* state.map((c) => c._id === card._id ? newCard : c) */)});
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info">
          <button onClick={props.onEditAvatar} className="profile__button-avatar">
            <img src={currentUser.avatar} alt="Аватар" className="profile__avatar"/>
          </button>
          <div className="profile__info-name">
            <div className="profile__info-group">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button onClick={props.onEditProfile} type="button" className="profile__info-button"></button>
            </div>
            <p className="profile__sub-name">{currentUser.about}</p>
          </div>
        </div>
        <button onClick={props.onAddPlace} type="button" className="profile__button"></button>
      </section>
      <section className="elements">
        <ul className="elements__grid">
          {cards.map((card) =>
            <Card card={card} key={card._id} onCardClick={props.onCardClick} onCardLike={handleCardLike}/>
          )}
        </ul>
      </section>
    </main>
  )
}

export default Main;
