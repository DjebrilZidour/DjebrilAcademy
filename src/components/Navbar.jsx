import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { getIsUserLogged } from "../utils/utils";
import { useState } from "react";

const UserPopUp = (props) => {
  const navigate = useNavigate();
  return (
    <section
      className="flex flex-col items-center justify-start absolute right-14 top-16 bg-white shadow-2xl rounded-2xl p-5  "
      style={{ display: props.isPopUpClosed ? "none" : "block" }}
    >
      <img
        onClick={() => {
          props.switchPopUpState(true);
        }}
        className="w-4 absolute right-3 top-2 cursor-pointer"
        src="https://cdn-icons-png.flaticon.com/128/3917/3917759.png"
        alt=""
      />

      <ul className="flex flex-col items-start justify-between">
        <div className="border-b-2 border-t-2 borders my-4 py-2">
          <img src="" alt="" />
          <div>
            <h1>User Name</h1>
            <h2>userEmail@gmail.com</h2>
          </div>
        </div>

        <div className="flex items-center  w-full  cursor-pointer hover:bg-gray-200 rounded-md">
          <img
            src="https://cdn-icons-png.flaticon.com/128/1144/1144760.png"
            alt=""
            className="w-8 m-2"
          />
          <Link to="/profile">
            <li className="px-1 py-2 cursor-pointer">My Profile</li>
          </Link>
        </div>

        <hr className="separator w-full" />

        <div className="flex items-center w-full  cursor-pointer hover:bg-gray-200 rounded-md">
          <img
            src="https://cdn-icons-png.flaticon.com/128/1828/1828765.png"
            alt=""
            className="w-8 m-2"
          />

          <Link to="/dashboard">
            <li className=" px-1 py-2 cursor-pointer ">Dashboard</li>
          </Link>
        </div>

        <hr className="separator w-full" />

        <div
          onClick={() => {
            localStorage.setItem("isUserLoggedIn", false);
            props.switchPopUpState(true);
            navigate("/login");
            location.reload();
          }}
          className="flex items-center w-full  cursor-pointer hover:bg-gray-200 rounded-md"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/128/1828/1828479.png"
            alt=""
            className="w-8 m-2"
          />

          <li className=" px-1 py-2 cursor-pointer text-red">Log out</li>
        </div>
      </ul>
    </section>
  );
};

let isUserLogged = getIsUserLogged();

const Navbar = () => {
  const [isPopUpClosed, switchPopUpState] = useState(true);

  return (
    <>
      <UserPopUp
        isPopUpClosed={isPopUpClosed}
        switchPopUpState={switchPopUpState}
        number="2"
      />

      <nav
        style={{ backgroundColor: "#61faaf" }}
        className="shadow-lg px-16 py-2 rounded-bl-3xl"
      >
        <ul className="list-none flex justify-between items-center">
          <li className="flex justify-center items-center gap-2">
            <Link to="/">
              <img className="h-12 w-12" src={Logo} />
            </Link>
            <Link to="/">
              <h1 className="text-3xl">DJeb.</h1>
            </Link>
          </li>
          <img src="" alt="" />
          <div className="flex justify-between items-center text-black-100  max-sm:flex-col max-sm:hidden ">
            <Link to="/">
              <li className="px-4 text-black cursor-pointer hover:underline">
                Home
              </li>
            </Link>

            <Link to="/about">
              <li className="px-4 text-black cursor-pointer hover:underline">
                About us
              </li>
            </Link>

            <Link to="/dashboard/home">
              <li className="px-4 text-black cursor-pointer hover:underline">
                Start learning
              </li>
            </Link>

            {!isUserLogged ? (
              <div className="flex justify-between items-center ml-4 ">
                <Link to="/login">
                  <button className="border-2 border-black rounded-2xl py-1 px-4 mx-2 text-black hover:bg-white">
                    Log in
                  </button>
                </Link>

                <Link to="/signup">
                  <button className="border-2 border-black text-black rounded-2xl py-1 px-4 hover:bg-white ">
                    Sing up
                  </button>
                </Link>
              </div>
            ) : (
              <div>
                <img
                  className="w-6 cursor-pointer"
                  src="https://cdn-icons-png.flaticon.com/128/3917/3917711.png"
                  alt=""
                  onClick={() => {
                    console.log("clicked");
                    switchPopUpState(!isPopUpClosed);
                  }}
                />
              </div>
            )}
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
