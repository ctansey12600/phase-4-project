import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function SignUpForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const currentUser = {
      first_name: firstName,
      last_name: lastName,
      username,
      password,
      password_confirmation: passwordConfirmation,
    };
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(currentUser),
    })
      .then((r) => r.json())
      .then(onLogin);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formSignUpFirstName">
        <Form.Label>First Name:</Form.Label>
        <Form.Control
          type="text"
          autoComplete="off"
          placeholder="Enter First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        ></Form.Control>
      </Form.Group>
      <Form.Group controlId="formSignUpLastName">
        <Form.Label>Last Name:</Form.Label>
        <Form.Control
          type="text"
          autoComplete="off"
          placeholder="Enter Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        ></Form.Control>
      </Form.Group>
      <Form.Group controlId="formSignUpUsername">
        <Form.Label>Username:</Form.Label>
        <Form.Control
          type="text"
          autoComplete="off"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></Form.Control>
      </Form.Group>
      <Form.Group controlId="formSignUpPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control
          type="password"
          autoComplete="off"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></Form.Control>
      </Form.Group>
      <Form.Group controlId="formSignUpPasswordConfirmation">
        <Form.Label>Password Confirmation:</Form.Label>
        <Form.Control
          type="password"
          autoComplete="off"
          placeholder="Confirm Password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        ></Form.Control>
      </Form.Group>
      <Button type="submit">Sign Up</Button>
    </Form>
  );
}

export default SignUpForm;
