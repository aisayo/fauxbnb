import React from "react";

import {
  Navbar as NavBar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";

const Navbar = () => {
  return (
    <>
      <NavBar bg="light" variant="light">
        <NavBar.Brand href="/">FauxBnB</NavBar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/posts">Places</Nav.Link>
        </Nav>

        <NavDropdown title="Want to Host?" id="basic-nav-dropdown">
          <NavDropdown.Item href="/users/signup">Signup</NavDropdown.Item>
          <NavDropdown.Item href="/users/login">Login</NavDropdown.Item>
          <NavDropdown.Item href="/posts/new">Add a new place</NavDropdown.Item>
        </NavDropdown>

        <Form inline>
          <FormControl
            type="text"
            className="mr-sm-2"
            placeHolder="Start your search"
          />
          <Button variant="outline-dark">Search</Button>
        </Form>
      </NavBar>
    </>
  );
};

const searchStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
};

export default Navbar;
