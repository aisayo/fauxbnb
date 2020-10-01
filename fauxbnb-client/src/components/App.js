import React from "react";
import Router from "../components/routing/Router";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "../components/routing/Navbar";
const App = () => {
  return (
    <>
      <Navbar />
      <Router />
    </>
  );
};

export default App;
