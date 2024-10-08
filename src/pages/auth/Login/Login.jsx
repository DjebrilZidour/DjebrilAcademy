import { useState } from "react";
import Input from "../../../components/Atomic/Input";
import Btn from "../../../components/Atomic/Btn";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { LOCAL_STORAGE_KEYS } from "../../../utils/utils";

const Login = () => {
  const [typedEmail, setTypedEmail] = useState("test@test.com");
  const [typedPassword, setTypedPassword] = useState("test");
  const [errMessage, setErrMessage] = useState("");
  const navigate = useNavigate();

  const submitLogin = () => {
    fetch("https://nodeexpress-zwwh.onrender.com/login", {
      method: "POST",
      body: JSON.stringify({
        email: typedEmail,
        password: typedPassword,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem(LOCAL_STORAGE_KEYS.isLogged, true);
          navigate("/dashboard");
          location.reload();
        } else {
          res.json().then((data) => {
            console.log(data);
            setErrMessage(data.message)
          });
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Navbar />
      <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl flex flex-col justify-center">
        <section>
          <h3 className="font-bold text-2xl text-center">Welcome to Startup</h3>
          <p className="text-red-600 pt-2 text-center ">
            {errMessage}
          </p>
        </section>

        <section className="mt-10 flex flex-col">
          <Input
            label="Email"
            type="email"
            value={typedEmail}
            setValue={setTypedEmail}
          />
          <Input
            label="Password"
            type="password"
            value={typedPassword}
            setValue={setTypedPassword}
          />

          <div className="flex justify-end">
            <a
              href="#"
              className="text-sm texts hover:black hover:underline mb-6"
            >
              Forgot your password?
            </a>
          </div>

          <Btn value="sing in" onClick={submitLogin} />
        </section>
      </main>

      <div className="text-black max-w-lg mx-auto text-center mt-12 mb-6">
        <p>
          Don't have an account?
          <Link to="/signup">
            <a href="#" className="font-bold hover:underline">
              Sign up
            </a>
          </Link>
          .
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
