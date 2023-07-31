import { useState } from "react";
import Input from "../../../components/Atomic/Input";
import Btn from "../../../components/Atomic/Btn";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { LOCAL_STORAGE_KEYS } from "../../../utils/utils";

const Login = () => {
  const [typedEmail, setTypedEmail] = useState("");
  const [typedPassword, setTypedPassword] = useState("");
  const navigate = useNavigate();

  const submitLogin = () => {
    if (typedEmail === "test@test.com" && typedPassword === "test") {
      localStorage.setItem(LOCAL_STORAGE_KEYS.isLogged, true);
      navigate("/dashboard");
    }
  };

  return (
    <div>
      <Navbar />
      <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl flex flex-col justify-center">
        <section>
          <h3 className="font-bold text-2xl text-center">Welcome to Startup</h3>
          <p className="text-gray-600 pt-2 text-center">
            Sign in to your account.
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
          Don't have an account?{" "}
          
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
