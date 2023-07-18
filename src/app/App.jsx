import { useState } from "react";
import Navbar from "../components/Navbar";
import Login from "../pages/auth/Login/Login";
import SingUp from "../pages/auth/SignUp/SignUp";
import Footer from "../components/Footer";
import BacGettingStarted from "../pages/bac-prep/BacGettingStarted";
import { Link } from "react-router-dom"; //! VERY __________ IMPORTANT !!!!!!!!!!!!!

function App() {
  // const startBtn = () => {};
  return (
    <section id="app">
      <Navbar/>
      <div>
        <div>
          <h1>BEM PREPARATION</h1>
          <p></p>
          <BacGettingStarted/>
          <Link to="/bac-getting-started">
          <button>start now</button>
          </Link>
        </div>
        <div></div>
      </div>
    </section>
  );
}

export default App;
