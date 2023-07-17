import { useState } from "react";
import Navbar from "../components/Navbar";
import Login from "../pages/auth/Login/Login";

function App() {
  return (
    <section id="app">
      <Navbar />
      <Login />
    </section>
  );
}

export default App;
