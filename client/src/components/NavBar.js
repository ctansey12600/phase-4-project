import React from "react";
import { NavLink } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";

function NavBar({ setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }
  return (
    <Navbar collapseOnSelect bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Tipsy With A Twist</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={NavLink} to="/">
              Drink Generator
            </Nav.Link>
            <Nav.Link as={NavLink} to="/menu">
              Full Menu
            </Nav.Link>
            <Nav.Link as={NavLink} to="/cart">
              Cart
            </Nav.Link>
            <NavDropdown title="My Kitchen" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/kitchen">
                My Kitchen
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/add-drinks">
                Add Drinks
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/add-ingredients">
                Add Ingredients
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Button onClick={handleLogoutClick}>Logout</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
