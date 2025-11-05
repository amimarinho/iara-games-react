import "./App.css";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";

function App() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    console.log("Venci na vida");
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <Navbar />
      <main className="login-layout">
        <div className="login-container">
          <h1>Criar conta</h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group md="4" controlId="nameInput">
              <Form.Label>Nome</Form.Label>
              <Form.Control required type="text" />
              <Form.Control.Feedback>Preencha um nome</Form.Control.Feedback>
            </Form.Group>

            <Form.Group md="4" controlId="emailInput">
              <Form.Label>E-mail</Form.Label>
              <Form.Control required type="email" />
              <Form.Control.Feedback>Preencha seu e-mail</Form.Control.Feedback>
            </Form.Group>

            <Form.Group md="4" controlId="passwordInput">
              <Form.Label>Senha</Form.Label>
              <Form.Control required type="password" minLength={6} />
              <Form.Control.Feedback>
                Senha deve conter pelo menos 6 caracteres
              </Form.Control.Feedback>
            </Form.Group>

            <button className="login-form-btn decorated-btn">
              Criar conta
            </button>
          </Form>
          <button className="btn-google">
            <i className="fa-brands fa-google"></i> Entrar com conta google
          </button>
        </div>
      </main>
      <footer className="footer">
        <address className="footer-info">
          <a href="#">
            <img
              className="footer-logo"
              src="./logo/logo-iara-games-60x60.png"
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
              <a href="" aria-label="Instagram" tabIndex="0">
                <i className="fa-brands fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
            <li className="footer-social-item">
              <a href="" aria-label="YouTube" tabIndex="0">
                <i className="fa-brands fa-youtube" aria-hidden="true"></i>
              </a>
            </li>
            <li className="footer-social-item">
              <a href="" aria-label="Facebook" tabIndex="0">
                <i className="fa-brands fa-facebook" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
        <img
          src="./assets/img/bushes.png"
          alt="Ilustração de arbustos"
          className="footer-img"
          role="presentation"
          aria-hidden="true"
        />
      </footer>
    </>
  );
}

export default App;
