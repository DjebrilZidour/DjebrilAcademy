import { getIsUserLogged } from "../../../utils/utils";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const DashboardSideBar = () => {
  let isUserLogged = getIsUserLogged();
  const [BarClosed, setBarState] = useState(false);
  const navigate = useNavigate();
  const sideBare = () => {
    console.log("im in ");
    if (BarClosed) {
      setBarState(false);
    } else {
      setBarState(true);
    }
  };

  return (
    <>
      <section
        id="dashboard-side-bar"
        className="shadow-2xl rounded-2xl py-5  w-80 border-2 ml-4 mt-6 h-full hidden"
        style={{ display: BarClosed ? "none" : "block" }}
      >
        <div
          
          className="flex justify-end items-center flex-end mx-4 rounded-full "
        >
          <img
            src="https://cdn-icons-png.flaticon.com/128/2985/2985161.png"
            alt=""
            className="w-12"
            onClick={sideBare}
          />
        </div>
        <Link Link to="/dashboard/home">
          <div className="flex items-center justify-start border-b-2">
            <img
              className="w-8 m-4 cursor-pointer"
              src="https://cdn-icons-png.flaticon.com/128/3917/3917711.png"
              alt=""
            />

            <h1 className="text-3xl my-4 cursor-pointer">Dashboard</h1>
          </div>
        </Link>

        <Link to="/dashboard/learning-grade">
          <div className="m-4 cursor-pointer flex justify-start items-center border-b-2 pb-4">
            <img
              className="w-12 mx-2 px-1"
              src="https://cdn-icons-png.flaticon.com/128/4185/4185218.png"
              alt=""
            />
            <h2>learning</h2>
          </div>
        </Link>
        <Link to="/dashboard/learning-progress">
          <div className="m-4 cursor-pointer flex justify-start items-center border-b-2 pb-4">
            <img
              className="w-12 mx-2 px-1"
              src="https://cdn-icons-png.flaticon.com/128/5948/5948543.png"
              alt=""
            />
            <h2>Interesting vidéos</h2>
          </div>
        </Link>
        <Link to="/dashboard/learning-progress">
          <div className="m-4 cursor-pointer flex justify-start items-center border-b-2 pb-4">
            <img
              className="w-12 mx-2 px-1"
              src="https://cdn-icons-png.flaticon.com/128/3208/3208799.png"
              alt=""
            />
            <h2>Educational news</h2>
          </div>
        </Link>

        <div className="flex justify-end items-center">
          <div className="m-4 flex justify-center items-center bg-red-500 w-44 px-4 py-2 rounded-xl">
            <img
              className="w-8 mx-2 px-1"
              src="https://cdn-icons-png.flaticon.com/128/10477/10477736.png"
              alt=""
            />
            <h1
              className="cursor-pointer text-white font-semibold pr-6"
              onClick={() => {
                localStorage.setItem("isUserLoggedIn", "false");
                isUserLogged = getIsUserLogged();
                console.log(isUserLogged);
                navigate("/");
              }}
            >
              log out
            </h1>
          </div>
        </div>
      </section>

      <section style={{ display: BarClosed ? "block" : "none" }}>
        <div className="flex justify-center items-center gap-4 flex-col m-4 w-24 border-2 rounded-2xl py-4">
          <div
           
            className="flex items-center justify-end p-4 rounded-full cursor-pointer"
          >
            <img
              className="w-8 "
              src="https://cdn-icons-png.flaticon.com/128/271/271228.png"
              alt=""
              onClick={sideBare}
            />
          </div>

          <Link Link to="/dashboard/home">
            <img
              className="w-10 m-2"
              src="https://cdn-icons-png.flaticon.com/128/3917/3917711.png"
              alt=""
            />
          </Link>

          <Link to="/dashboard/learning-grade">
            <img
              className="w-14 m-2"
              src="https://cdn-icons-png.flaticon.com/128/4185/4185218.png"
            />
          </Link>
          <Link to="/dashboard/learning-progress">
            <img
              className="w-12 m-4"
              src="https://cdn-icons-png.flaticon.com/128/5948/5948543.png"
            />
          </Link>

          <img
            className="w-12 m-4"
            src="https://cdn-icons-png.flaticon.com/128/3208/3208799.png"
          />
          <div className="rounded-full p-4 bg-red-500">
            <img
              src="https://cdn-icons-png.flaticon.com/128/10477/10477736.png"
              alt=""
              className="w-8"
              onClick={() => {
                localStorage.setItem("isUserLoggedIn", "false");
                isUserLogged = getIsUserLogged();
                console.log(isUserLogged);
                navigate("/");
              }}
            />
          </div>
        </div>
      </section>
     
    </>
  );
};

export default DashboardSideBar;
