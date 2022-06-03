function Main() {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info">
          <button className="profile__button-avatar">
            <img src="#" alt="Аватар" className="profile__avatar"/>
          </button>
          <div className="profile__info-name">
            <div className="profile__info-group">
              <h1 className="profile__name"></h1>
              <button type="button" className="profile__info-button"></button>
            </div>
            <p className="profile__sub-name"></p>
          </div>
        </div>
        <button type="button" className="profile__button"></button>
      </section>
      <section className="elements">
        <ul className="elements__grid">
        </ul>
      </section>
    </main>
  )
}

export default Main;
