import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const currentUser = {
      username,
      password,
    };
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(currentUser),
    })
      .then((r) => r.json())
      .then((user) => onLogin(user));
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formLoginUsername">
        <Form.Label>Username:</Form.Label>
        <Form.Control
          type="text"
          autoComplete="off"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></Form.Control>
      </Form.Group>
      <Form.Group controlId="formLoginPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control
          type="password"
          autoComplete="off"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></Form.Control>
      </Form.Group>
      <Button type="submit">Login</Button>
    </Form>
  );
}

export default LoginForm;
