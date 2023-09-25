import Navbar from "../../../components/Navbar";
import DashboardSideBar from "../components/DashboardSideBar";
import { Link } from "react-router-dom";

const Learning = () => {
  console.log("im in ");
  return (
    <>
      <section className="flex">

        <div className="py-36 mx-4 px-32  flex flex-col items-center justify-center gap-8 ">

          <div className="px-32 py-6 rounded-lg background">
            <Link to="/dashboard/learning-courses">
              <h1 className="text-3xl cursor-pointer">Dourous</h1>
            </Link>
          </div>

          <div className="px-32 py-6 rounded-lg background">
            <Link to="/dashboard/learning-exc">
              <h1 className="text-3xl cursor-pointer">Exercices</h1>
            </Link>
          </div>

        </div>

      </section>
    </>
  );
};
export default Learning;
