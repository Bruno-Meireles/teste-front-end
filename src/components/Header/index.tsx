import box from "../../assets/icons/box.svg";
import cart from "../../assets/icons/cart.svg";
import heart from "../../assets/icons/heart.svg";
import search from "../../assets/icons/search.svg";
import user from "../../assets/icons/user.svg";
import logo from "../../assets/icons/logo.svg";
import "./Header.scss";
import { TopbarItem } from "../../types/ui";

const topbarItems: TopbarItem[] = [
  { icon: box, text: "Compra 100% segura" },
  { icon: cart, text: "Frete grátis acima de R$ 200" },
  { icon: heart, text: "Parcele suas compras" },
];


const Header = () => {
    
  
  return (
    <header className="header">
      <div className="header__topbar">
        <div className="content-1280">
          <ul className="header__topbar-list">
            {topbarItems.map((item, index) => (
              <li key={index} className="header__topbar-item">
                <img src={item.icon} alt={item.text} />
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      ;
      <div className="header__container">
        <div className="content-1280 space-between">
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
        <nav className="header__nav">
          <div className="content-1141">
            <ul className="header__menu">
              <li className="header__menu-item"> TODAS CATEGORIAS</li>
              <li className="header__menu-item">SUPERMERCADO</li>
              <li className="header__menu-item">LIVROS</li>
              <li className="header__menu-item">MODA</li>
              <li className="header__menu-item">LANÇAMENTOS</li>
              <li className="header__menu-item">OFERTAS DO DIA</li>
              <li className="header__menu-item">ASSINATURA</li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
