import React, { useState } from "react";
import { Form, Button, FormGroup, FormControl } from "react-bootstrap";

const UserSignup = ({ location }) => {
  const title = location.pathname === "/users/signup" ? "Sign Up" : "Login";

  const [userData, setUserData] = useState({ email: "", password: "" });

  const handleUserData = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div style={divStyle}>
      <h1>{title}</h1>
      <Form>
        <FormGroup controlId="formBasicEmail">
          <Form.Label>Email: </Form.Label>
          <FormControl
            type="email"
            value={userData.email}
            onChange={handleUserData}
            name="email"
          />
        </FormGroup>

        <br />
        <br />

        <FormGroup controlId="formBasicPassword">
          <Form.Label>Password: </Form.Label>

          <FormControl
            type="password"
            value={userData.password}
            onChange={handleUserData}
            name="password"
          />
        </FormGroup>
        <br />
        <br />

        <Button variant="light" type="submit">
          {title}
        </Button>
      </Form>
    </div>
  );
};

const divStyle = {
  border: "solid",
  borderColor: "lightGray",
  display: "flex",
  flexDirection: "column",
  alignContent: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "40%",
  marginTop: "5%",
  marginLeft: "25%",
  paddingTop: "5%",
  paddingBottom: "5%",
};
export default UserSignup;
