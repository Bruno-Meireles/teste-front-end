import box from "../../assets/icons/box.svg";
import cart from "../../assets/icons/cart.svg";
import heart from "../../assets/icons/heart.svg";
import search from "../../assets/icons/search.svg";
import user from "../../assets/icons/user.svg";
import logo from "../../assets/icons/logo.svg";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="content-1280">
          <div className="header__logo">
            <img src={logo} alt="Econverse logo" />
          </div>
          <div className="header__search">
            <input
              type="text"
              placeholder="O que você está buscando?"
              className="header__input"
            />
            <button className="header__search-button">
              <img src={search} alt="Search" />
            </button>
          </div>

          <div className="header__actions">
            <button className="header__icon">
              <img src={box} alt="Box " />
            </button>
            <button className="header__icon">
              <img src={user} alt="User" />
            </button>
            <button className="header__icon">
              <img src={heart} alt="Favorites" />
            </button>
            <button className="header__icon header__cart">
              <img src={cart} alt="Cart" />
              <span className="header__cart-badge"></span>
            </button>
          </div>
        </div>
      </div>
      {/* 
      <nav className="header__nav">
        <ul className="header__menu">
          <li className="header__menu-item">Todas Categorias</li>
          <li className="header__menu-item">Supermercado</li>
          <li className="header__menu-item">Livros</li>
          <li className="header__menu-item">Moda</li>
          <li className="header__menu-item">Lançamentos</li>
          <li className="header__menu-item">Ofertas do Dia</li>
          <li className="header__menu-item">Assinatura</li>
        </ul>
      </nav> */}
    </header>
  );
};

export default Header;
