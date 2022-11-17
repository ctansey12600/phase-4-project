import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import DrinkGenerator from "../pages/DrinkGenerator";
import FullMenu from "../pages/FullMenu";
import MyKitchen from "../pages/MyKitchen";
import Cart from "../pages/Cart";
import AddDrink from "../pages/AddDrink";
import AddIngredient from "../pages/AddIngredient";

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
      <main>
        <Switch>
          <Route exact path="/">
            <DrinkGenerator />
          </Route>
          <Route exact path="/menu">
            <FullMenu />
          </Route>
          <Route exact path="/kitchen">
            <MyKitchen />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/add-drinks">
            <AddDrink />
          </Route>
          <Route exact path="/add-ingredients">
            <AddIngredient />
          </Route>
          <Route path="*">
            <h1>Page Not Found</h1>
          </Route>
        </Switch>
      </main>
    </Container>
  );
}

export default App;
