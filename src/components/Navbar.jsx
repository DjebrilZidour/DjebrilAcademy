const Navbar = () => {
  return (
    <nav className="bg-amber-400 px-16 py-2 rounded-bl-3xl ">
      <ul className="list-none flex justify-between items-center">
        <li>
          <h1 className="cursor-pointer text-2xl">LOGO</h1>
        </li>

        <div className="flex justify-between items-center text-white">

          <li className="px-4 hover:text-black cursor-pointer">home</li>
          <li className="px-4 hover:text-black cursor-pointer">about us</li>
          <li className="px-4 hover:text-black cursor-pointer">start learning</li>

          <div className="flex justify-between items-center ml-4">
            <button className="border-2 border-white rounded-2xl py-1 px-4 mx-2 hover:bg-white hover:text-amber-400">Log in</button>
            <button className="border-2 border-white rounded-2xl py-1 px-4 hover:bg-white hover:text-amber-400">Sing up</button>
          </div>

        </div>

      </ul>
    </nav>
  );
};
export default Navbar;
