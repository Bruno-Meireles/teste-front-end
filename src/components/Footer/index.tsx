import Button from "../ui/Button/Button";
import "./Footer.scss"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="contents">
          <div className="footer__newsletter">
            <div className="footer__newsletter-text">
              <h2>Inscreva-se na nossa newsletter</h2>
              <p>
                Assine a nossa newsletter e receba as novidades e conteúdos
                exclusivos da Econverse.
              </p>
            </div>
            <div className="footer__form">
              <input
                className="footer__input"
                type="text"
                placeholder="Digite seu nome"
              />
              <input type="email" placeholder="Digite seu e-mail" />
              <Button text="INSCREVER" onClick={() => {}}></Button>
            </div>
          </div>
          <label className="footer__checkbox">
            <input type="checkbox" /> Aceito os termos e condições
          </label>
        </div>
      </div>

      <div className="footer__content">
        <div className="footer__left">
          <img src="/assets/icons/logo-econverse.png" alt="Econverse" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="footer__social">
            <a href="#">
              <i className="icon-facebook">
                <a href="#">
                  <img src="/assets/icons/facebook.svg" alt="Facebook" />
                </a>
                <a href="#">
                  <img src="/assets/icons/instagram.svg" alt="Instagram" />
                </a>
              </i>
              <a href="#">
                <img src="/assets/icons/linkedin.svg" alt="LinkedIn" />
              </a>
            </a>
            <a href="#">
              <i className="icon-instagram"></i>
            </a>
            <a href="#">
              <i className="icon-linkedin"></i>
            </a>
          </div>
        </div>

        <div className="footer__links">
          <div className="footer__column">
            <h3>Institucional</h3>
            <ul>
              <li>
                <a href="#">Sobre Nós</a>
              </li>
              <li>
                <a href="#">Movimento</a>
              </li>
              <li>
                <a href="#">Trabalhe conosco</a>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <h3>Ajuda</h3>
            <ul>
              <li>
                <a href="#">Suporte</a>
              </li>
              <li>
                <a href="#">Fale Conosco</a>
              </li>
              <li>
                <a href="#">Perguntas Frequentes</a>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <h3>Termos</h3>
            <ul>
              <li>
                <a href="#">Termos e Condições</a>
              </li>
              <li>
                <a href="#">Política de Privacidade</a>
              </li>
              <li>
                <a href="#">Troca e Devolução</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </footer>
  );
};

export default Footer;
