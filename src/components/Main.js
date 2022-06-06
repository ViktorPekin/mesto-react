import React, {useEffect, useState } from 'react';
import {api} from '../utils/Api'
import Card from '../components/Card'

function Main(props) {
  const [userName, setUserName] = useState();
  const [userDescription, setUserDescription] = useState();
  const [userAvatar, setUserAvatar] = useState();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getInitialProfile().then((res) => {
      setUserName(res.name)
      setUserDescription(res.about)
      setUserAvatar(res.avatar)
    });
  }, []);

  useEffect(() => {
    api.getInitialCard().then((res) => {
      setCards(res.map((item)=>({
        img: item.link,
        name: item.name,
        like: item.likes.length,
        key: item._id
      })))
    });
  }, [])

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info">
          <button onClick={props.onEditAvatar} className="profile__button-avatar">
            <img src={userAvatar} alt="Аватар" className="profile__avatar"/>
          </button>
          <div className="profile__info-name">
            <div className="profile__info-group">
              <h1 className="profile__name">{userName}</h1>
              <button onClick={props.onEditProfile} type="button" className="profile__info-button"></button>
            </div>
            <p className="profile__sub-name">{userDescription}</p>
          </div>
        </div>
        <button onClick={props.onAddPlace} type="button" className="profile__button"></button>
      </section>
      <section className="elements">
        <ul className="elements__grid">
          {cards.map((card) =>
            <Card {...card} card={card} onCardClick={props.onCardClick}/>
          )}
        </ul>
      </section>
    </main>
  )
}

export default Main;
