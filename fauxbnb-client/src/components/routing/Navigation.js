import React from "react";
import { Link } from "react-router-dom";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import Searchbar from "../Searchbar";

const Navigation = () => {
  return (
    <Navbar bg="light" variant="light" fill expand="lg">
      <Navbar.Toggle aria-controls="basic-Navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Navbar.Brand href="/">FauxBnB</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link>
              <Link to="/posts">Posts</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <NavDropdown title="Want to Host?" id="basic-nav-dropdown">
          <NavDropdown.Item href="/users/signup">Signup</NavDropdown.Item>
          <NavDropdown.Item href="/users/login">Login</NavDropdown.Item>
          <NavDropdown.Item href="/posts/new">Add a new place</NavDropdown.Item>
        </NavDropdown>
        <Searchbar />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
