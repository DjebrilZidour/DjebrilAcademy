import { useState } from "react";
import Input from "../../../components/Atomic/Input";
import Btn from "../../../components/Atomic/Btn";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const SignUp = () => {
  const [typedName, setTypedName] = useState("");
  const [typedEmail, setTypedEmail] = useState("");
  const [typedPassword, setTypedPassword] = useState("");

  return (
    <div>
      <Navbar />
      <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
        <section>
          <h3 className="font-bold text-2xl text-center">Welcome to Startup</h3>
          <p className="text-gray-600 pt-2 text-center">
            Sign up to your account.
          </p>
        </section>

        <section className="mt-10">
          <form className="flex flex-col" method="POST" action="#">
            <Input
              label="Full name"
              type="text"
              value={typedName}
              setValue={setTypedName}
            />
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
            <Btn
              value="sing up"
              onClick={() => {
                console.log(
                  "NAME:",
                  typedName,
                  "Email",
                  typedEmail,
                  "PASSWORD:",
                  typedPassword
                );
              }}
            />
          </form>
        </section>
      </main>

      <div className="text-black max-w-lg mx-auto text-center mt-12 mb-6">
        <p>
          Already have an account?{" "}
          <a href="#" className="font-bold hover:underline">
            Sign in
          </a>
          .
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
