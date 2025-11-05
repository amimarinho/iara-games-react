import bushes from "../../assets/bushes.png";
import logo from "../../assets/logo-iara-games-60x60.png";
import {
  InstagramLogoIcon,
  YoutubeLogoIcon,
  FacebookLogoIcon,
} from "@phosphor-icons/react";

function Footer() {
  return (
    <footer className="footer">
      <address className="footer-info">
        <a href="#">
          <img
            className="footer-logo"
            src={logo}
            alt="Iara Games - voltar para o topo"
          />
        </a>
        <small>Iara Games - Jogos digitais</small>
        <small>Brasil - BR</small>
        <small>CNPJ: 25.815.481/0001-14</small>
      </address>
      <div className="footer-menu">
        <h2>
          <strong>Jogos</strong>
        </h2>
        <ul className="footer-list">
          <li>
            <a href="./jogo-page.html">Enigma do Medo</a>
          </li>
          <li>
            <a href="./jogo-page.html">Adore</a>
          </li>
          <li>
            <a href="./jogo-page.html">Irmão do Jorel</a>
          </li>
          <li>
            <a href="./jogo-page.html">Dandy Ace</a>
          </li>
          <li>
            <a href="./jogo-page.html">Mark of the deep</a>
          </li>
          <li>
            <a href="./jogo-page.html">Akane</a>
          </li>
          <li>
            <a href="./jogo-page.html">Redo</a>
          </li>
        </ul>
      </div>
      <div className="footer-menu">
        <h2>
          <strong>Redes sociais</strong>
        </h2>
        <ul className="footer-social-list">
          <li className="footer-social-item">
            <a href="" aria-label="Instagram">
              <InstagramLogoIcon size={32} />
            </a>
          </li>
          <li className="footer-social-item">
            <a href="" aria-label="YouTube">
              <YoutubeLogoIcon size={32} />
            </a>
          </li>
          <li className="footer-social-item">
            <a href="" aria-label="Facebook">
              <FacebookLogoIcon size={32} />
            </a>
          </li>
        </ul>
      </div>
      <img
        src={bushes}
        alt="Ilustração de arbustos"
        className="footer-img"
        role="presentation"
        aria-hidden="true"
      />
    </footer>
  );
}

export default Footer;
