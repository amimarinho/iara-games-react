import Form from "react-bootstrap/Form";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";

function App() {
  const [validated, setValidated] = useState(false);
  const [users, setUsers] = useState(null);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      const request = await fetch("http://localhost:3000/users");
      const response = await request.json();

      setUsers(response);
    };

    getUsers();
  }, []);

  const checkUsers = (email, password) => {
    const hasUser = users.find(
      (user) => user.password === password && user.email === email
    );

    return hasUser;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const email = form.emailInput.value;
    const password = form.passwordInput.value;

    const isUserLoggedIn = checkUsers(email, password);

    if (form.checkValidity() === false && !isUserLoggedIn) {
      event.stopPropagation();
      setIsLogged(false);
      return;
    }

    setIsLogged(true);
    setValidated(true);
  };

  return (
    <>
      <Navbar />
      <main className="login-layout">
        <div className="login-container">
          {isLogged ? (
            <h1 className="login-welcome">Boas vindas ao Iara Games ✨</h1>
          ) : (
            <>
              <h1>Entrar</h1>
              <Form
                className="login-form"
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
              >
                <Form.Group md="4" controlId="emailInput">
                  <Form.Label>E-mail</Form.Label>
                  <Form.Control required type="email" />
                  <Form.Control.Feedback type="invalid">
                    Preencha seu e-mail
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group md="4" controlId="passwordInput">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control required type="password" minLength={6} />
                  <Form.Control.Feedback type="invalid">
                    Senha deve conter pelo menos 6 caracteres
                  </Form.Control.Feedback>
                </Form.Group>

                <button className="login-form-btn decorated-btn">Login</button>
              </Form>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
