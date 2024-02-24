import { useState } from "react";
import Input from "../../../components/Atomic/Input";
import Btn from "../../../components/Atomic/Btn";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { Link, Navigate } from "react-router-dom";
import { LOCAL_STORAGE_KEYS } from "../../../utils/utils";

const SignUp = () => {
  const [typedName, setTypedName] = useState("");
  const [typedEmail, setTypedEmail] = useState("");
  const [typedPassword, setTypedPassword] = useState("");

  const createAccount = () => {
    fetch("http://localhost:3000/register", {
      method: "POST",
      body: JSON.stringify({ name:typedName ,email: typedEmail, password: typedPassword }),
      headers:{
        Accept:"application/json", "content-Type": "application/json",
      },
    })
    .then((res)=>{
      if (res.status === 200 ) {
        console.log("goods");
        alert("account created successfully")
        console.log("done sign up ");
      }else{
        res.json().then((data)=>{
          console.log(data);
          setErrMessage(data.message)
        })
      }
    })
    .catch((err)=>console.log(err));
    
  };

  return (
    <div>
      <Navbar />
      <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
        <section>
          <h3 className="font-bold text-2xl text-center">
            Welcome to your online school
          </h3>
          <p className="text-gray-600 pt-2 text-center">
            Sign up to your account.
          </p>
        </section>

        <section className="mt-10">
          <form className="flex flex-col">
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
              onClick={createAccount}
            />
          </form>
        </section>
      </main>

      <div className="text-black max-w-lg mx-auto text-center mt-12 mb-6">
        <p>
          Already have an account?{" "}
          <Link to="/login">
            <a className="font-bold hover:underline">
              Sign in .
            </a>
          </Link>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
