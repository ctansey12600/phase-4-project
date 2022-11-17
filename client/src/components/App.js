import React, { useEffect, useState } from "react";
import Login from "../pages/Login";
import NavBar from "./NavBar";

import Container from "react-bootstrap/Container";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    //auto login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <Container fluid>
      <NavBar setUser={setUser} />
    </Container>
  );
}

export default App;
