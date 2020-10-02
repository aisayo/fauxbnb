import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import Searchbar from "../Searchbar";

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand href="/">FauxBnB</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/posts">Places</Nav.Link>
          <NavDropdown title="Want to host?" id="collapsible-nav-dropdown">
            <NavDropdown.Item href="/users/signup">Signup</NavDropdown.Item>
            <NavDropdown.Item href="/users/login"> Login </NavDropdown.Item>
            <NavDropdown.Item href="/postings/new">Add a new place</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      <Searchbar />
    </Navbar>
  );
};

export default Navigation;
