import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
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
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
