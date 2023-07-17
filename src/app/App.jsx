import { useState } from "react";
import Navbar from "../components/Navbar";
import Login from "../pages/auth/Login/Login";
import SingUp from "../pages/auth/SignUp/SignUp"
import Footer from "../components/Footer";

function App() {
  return (
    <section id="app">
      <Navbar />
      {/* <Login /> */}
      {/* <Login/> */}
      <SingUp/>
      <Footer/>
    </section>
  );
}

export default App;
