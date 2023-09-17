import { useState } from "react";
import Navbar from "../components/Navbar";
import Login from "../pages/auth/Login/Login";
import SingUp from "../pages/auth/SignUp/SignUp";
import Footer from "../components/Footer";
import { Link } from "react-router-dom"; //! VERY __________ IMPORTANT !!!!!!!!!!!!!
import Btn from "../components/Atomic/Btn";

function App() {
  // const startBtn = () => {};
  return (
    <section id="app">
      <Navbar />

      <div className="flex justify-between mt-8  max-sm:flex-col max-sm:w-4/5 max-sm:w-92 max-sm:my-4 ">
        <div
          id="bem-prep-card"tru
          className="flex flex-col justify-between items-center text-center gap-16 border-2 border-black rounded-xl m-2 py-10 px-4 w-full  h-92 "
        >
          <div className="flex justify-center gap-4 items-center">
            <img
              className="w-12"
              src="https://cdn-icons-png.flaticon.com/512/207/207190.png"
              alt=""
            />
            <h1 className="text-3xl">BEM PREPARATION</h1>
          </div>

          <p className="text-xl w-1/2">
            if you want to get the best mark on your bem so our program is
            dedicated for you djebril academy will offer you a program that
            helps you to be the first in your middle shool
          </p>
          <Btn value="prepare for your Bem Now !!!" />
        </div>

        <div
          id="bac-prep-card"
          className="flex flex-col justify-between items-center text-center gap-16 border-2 border-black rounded-xl m-2 py-10 px-4 w-full h-92"
        >
          <div className="flex justify-center gap-4 items-center">
            <img
              className="w-12"
              src="https://cdn-icons-png.flaticon.com/512/2677/2677319.png"
              alt=""
            />
            <h1 className="text-3xl">BAC PREPARATION</h1>
          </div>

          <p className="text-xl text-xl w-1/2">
            if you want to get the best mark on your <b>bac exam</b> so our
            program is dedicated for you djebril academy will offer you a
            program that helps you to be the first in your middle shool
          </p>
          <Btn value="prepare for your Bac Now !!!" />
        </div>

      </div>

      <footer />
    </section>
  );
}

export default App;
