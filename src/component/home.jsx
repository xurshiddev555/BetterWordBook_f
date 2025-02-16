import logo from "../logo.svg";
import React from "react";
import HeaderComp from "./header/header";

const Home = () => {
  return (
    <div className="App">
      <HeaderComp />

      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
};
export default Home;
