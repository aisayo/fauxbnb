import React from "react";
import { NavLink } from "react-router-dom";

import { Navbar as NavBar, Nav, Form, FormControl, Button } from "react-bootstrap";

const Navbar = () => {
  return (
    <>
      <NavBar bg="light" variant="light" >
        <NavBar.Brand href="/">FauxBnB</NavBar.Brand>
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/posts">Posts</Nav.Link>
        <Nav.Link href="/users/login">Login</Nav.Link>
        <Nav.Link href="/users/signup">Signup</Nav.Link>

        <Form inline>
          <FormControl type="text" className="mr-sm-2" />
          <Button variant="outline-dark">Search</Button>
        </Form>
      </NavBar>
    </>
  );
};

export default Navbar;
