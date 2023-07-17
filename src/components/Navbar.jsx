import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-amber-50 shadow-lg px-16 py-2 rounded-bl-3xl  ">
      <ul className="list-none flex justify-between items-center">
        <li>
          <Link to="/">
            <img className="h-12 w-12" src={Logo} />
          </Link>
        </li>

        <div className="flex justify-between items-center text-black-100">
          <li className="px-4 hover:text-black cursor-pointer">home</li>
          <li className="px-4 hover:text-black cursor-pointer">about us</li>
          <li className="px-4 hover:text-black cursor-pointer">
            start learning
          </li>

          <div className="flex justify-between items-center ml-4">
            <Link to="/login">
              <button className="border-2 border-white rounded-2xl py-1 px-4 mx-2 hover:bg-white hover:text-amber-400">
                Log in
              </button>
            </Link>
            <Link to="/signup">
              <button className="border-2 border-white rounded-2xl py-1 px-4 hover:bg-white hover:text-amber-400">
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
