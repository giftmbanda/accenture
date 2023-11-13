import React from "react";
import Nav from "./Nav";
import Main from "./Main";
import Footer from "./Footer";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


const App = () => {
  return (
    <>
      <Nav />
      <Main />
      <Footer />
    </>
  );
}

export default App;
