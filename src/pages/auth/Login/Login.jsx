import { useState } from "react";
import Input from "../../../components/Atomic/Input";
import Btn from "../../../components/Atomic/Btn";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const Login = () => {
  const [typedEmail, setTypedEmail] = useState("");
  const [typedPassword, setTypedPassword] = useState("");
  return (
    <div>
      <Navbar />
      <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
        <section>
          <h3 className="font-bold text-2xl text-center">Welcome to Startup</h3>
          <p className="text-gray-600 pt-2 text-center">
            Sign in to your account.
          </p>
        </section>

        <section className="mt-10">
          <form className="flex flex-col" method="POST" action="#">
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
                className="text-sm text-purple-600 hover:text-purple-700 hover:underline mb-6"
              >
                Forgot your password?
              </a>
            </div>

            <Btn
              value="sing in"
              onClick={() => {
                console.log("Email:", typedEmail, "PASSWORD:", typedPassword);
              }}
            />
          </form>
        </section>
      </main>

      <div className="text-black max-w-lg mx-auto text-center mt-12 mb-6">
        <p>
          Don't have an account?{" "}
          <a href="#" className="font-bold hover:underline">
            Sign up
          </a>
          .
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
