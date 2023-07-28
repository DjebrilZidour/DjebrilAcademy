import Navbar from "../../../components/Navbar";
import DashboardSideBar from "../components/DashboardSideBar";
import { Link } from "react-router-dom";

const Learning = () => {
  console.log("im in ");
  return (
    <>
      <Navbar />
      <section className="flex ">
        <div>
          <DashboardSideBar />
        </div>

        <div className="my-6 mx-2 p-2 border-2 rounded-3xl flex flex-col items-center justify-center gap-4 w-full ">
          <div className="p-12 border-2 border-black rounded-3xl text-center w-4/5">
            <Link to="/subjects">
              <h1 className="text-3xl cursor-pointer">DOUROUS</h1>
            </Link>
          </div>
          <div className="p-12 border-2 border-black rounded-3xl text-center w-4/5">
            <Link to="/subjects">
              <h1 className="text-3xl cursor-pointer">Exercices</h1>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
export default Learning;
