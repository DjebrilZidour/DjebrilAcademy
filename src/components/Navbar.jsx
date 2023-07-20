import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { getIsUserLogged } from "../utils/utils";
import { useState } from "react";

const UserPopUp = (props) => {
  console.log(props.isPopUpClosed);
  console.log(props.number);

  return (
    <section className="absolute right-10 top-10 bg-white shadow-2xl rounded-2xl p-4 " style={{ display: props.isPopUpClosed ? "none" : "block" }}>
      <ul>
        <li className="borders border-b-2 p-1 ">Dashboard</li>
        <li className="borders border-b-2 p-1 ">My Profile</li>
        <li className="borders border-b-2 p-1 ">Log out</li>
      </ul>
    </section>
  );
};

const isUserLogged = getIsUserLogged();
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

          <div className="flex justify-between items-center text-black-100">
            <Link to="/">
              <li className="px-4 text-black cursor-pointer hover:underline">
                home
              </li>
            </Link>

            <li className="px-4 text-black cursor-pointer hover:underline">
              about us
            </li>
            <li className="px-4 text-black cursor-pointer hover:underline">
              start learning
            </li>

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
                {/* <h1
                  onClick={() => {
                    switchPopUpState(false)
                  }}
                >
                  <strong>user</strong>
                </h1> */}
                <img
                  className="w-6 pointer"
                  src="https://cdn-icons-png.flaticon.com/128/3917/3917711.png"
                  alt=""
                  onClick={() => {
                    console.log("clicked");
                    switchPopUpState(!isPopUpClosed)
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
