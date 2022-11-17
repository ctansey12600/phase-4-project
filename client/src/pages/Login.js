import { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Button from "react-bootstrap/Button";

function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <Container fluid>
      {showLogin ? (
        <Row>
          <h1>Tipsy With A Twist</h1>
          <h2>Spicy Up Your Night With a Random Cocktail</h2>
          <Col>
            <LoginForm onLogin={onLogin} />
          </Col>
          <Col>
            <h3>Don't have an account?</h3>
            <Button onClick={() => setShowLogin(false)}>Sign Up</Button>
          </Col>
        </Row>
      ) : (
        <Row>
          <h1>Sign Up Now!</h1>
          <h2>To Start Crafting Cocktails</h2>
          <Col>
            <SignUpForm onLogin={onLogin} />
          </Col>
          <Col>
            <h3>Already have an account?</h3>
            <Button onClick={() => setShowLogin(true)}>Log In</Button>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default Login;
