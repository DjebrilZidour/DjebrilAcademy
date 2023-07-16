import { useState } from "react";
import Navbar from "../components/Navbar";
const Singup = (props) => {};

const Login = (props) => {
  const [typedEmail, setTypedEmail] = useState("");
  const [typedPassword, setTypedPassword] = useState("");
  return (
    <div className="bg-amber-300 w-screen h-screen w-screen h-screen flex justify-center items-center ">
      <div className="  flex justify-center gap-4 flex-col items-center border-2 border-black p-4 rounded-2xl">
        <h1 className="text-3xl text-white">Log in</h1>
        <input
        style={{border: "px solid #f19c12"}}
          className=" p-4"
          value={typedEmail}
          placeholder="e-mail"
          type="email"
          onChange={(e) => {
            setTypedEmail(e.target.value);
          }}
        />
        <input
        
          value={typedPassword}
          className="border-2 border-black p-4"
          placeholder="password"
          type="password"
          onChange={(e) => {
            setTypedPassword(e.target.value);
          }}
        />
        <button
          className="border-4 border-orange-50 px-8 py-2 rounded-2xl"
          onClick={() => {
            setTypedEmail(typedEmail);
            setTypedPassword(typedPassword);
            console.log(typedEmail);
            console.log(typedPassword);
          }}
        >
          Log in
        </button>
      </div>
    </div>
  );
};

function App() {
  return (
    <section id="app">
      {/* <Navbar /> */}
      {/* <Login /> */}
      {/* <header>
        <div>
          <h1>Remember that your success is between your hands !!! </h1>
          <p>
            Unlock boundless knowledge with our innovative educational platform.
            Learn, grow, and thrive with interactive courses, engaging videos,
            and personalized learning pathways. Fuel your curiosity and unleash
            your potential today!
          </p>
          <button>start learning now</button>
        </div>

        <div>
          <img
            src="https://images.pexels.com/photos/4195504/pexels-photo-4195504.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
          />
        </div>
      </header> */}
      <main>
        <Login />
      </main>
    </section>
  );
}

export default App;
