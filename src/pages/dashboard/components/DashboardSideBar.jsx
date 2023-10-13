import { getIsUserLogged } from "../../../utils/utils";
import { Link, useNavigate } from "react-router-dom";

const DashboardSideBar = () => {
  let isUserLogged = getIsUserLogged();
  const navigate = useNavigate();

  return (
    <>
      <section
        id="dashboard-side-bar"
        className="shadow-2xl rounded-2xl py-5  w-80 border-2 ml-4 mt-6 h-full "
      >
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

        <Link to="/dashboard/learning-welcome">
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
              src="https://cdn-icons-png.flaticon.com/128/1535/1535012.png"
              alt=""
            />
            <h2>Learning progress</h2>
          </div>
        </Link>

        <Link to="">
          <div className="m-4 cursor-pointer flex justify-start items-center border-b-2 pb-4">
            <img
              className="w-12 mx-2 px-1"
              src="https://cdn-icons-png.flaticon.com/128/5677/5677910.png"
              alt=""
            />
            <h2>Quizs</h2>
          </div>
        </Link>

        <div className="m-4 cursor-pointer flex justify-start items-center border-b-2 pb-4">
          <img
            className="w-12 mx-2 px-1"
            src="https://cdn-icons-png.flaticon.com/128/2157/2157114.png"
            alt=""
          />
          <h2>Intelegent games</h2>
        </div>

        <div className="m-4 cursor-pointer flex justify-start items-center border-b-2 pb-4">
          <img
            className="w-12 mx-2 px-1"
            src="https://cdn-icons-png.flaticon.com/128/5879/5879073.png"
            alt=""
          />
          <h2>Settings</h2>
        </div>

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

      <section className="hidden">
        <div className="flex justify-center items-center">
          <img
            className="w-12"
            src="https://cdn-icons-png.flaticon.com/128/271/271228.png"
            alt=""
          />
        </div>

        <div className="flex justify-center items-start flex-col m-4 w-24 border-2">
          <img
            className="w-20 m-2"
            src="https://cdn-icons-png.flaticon.com/128/3917/3917711.png"
            alt=""
          />
          <img
            className="w-12 m-4"
            src="https://cdn-icons-png.flaticon.com/128/4185/4185218.png"
          />
          <img
            className="w-12 m-4"
            src="https://cdn-icons-png.flaticon.com/128/1535/1535012.png"
          />

          <img
            className="w-12 m-4"
            src="https://cdn-icons-png.flaticon.com/128/5677/5677910.png"
            alt=""
          />

          <img
            className="w-12 m-4"
            src="https://cdn-icons-png.flaticon.com/128/2157/2157114.png"
          />
          <img
            className="w-12 m-4"
            src="https://cdn-icons-png.flaticon.com/128/5879/5879073.png"
          />
        </div>
      </section>
    </>
  );
};

export default DashboardSideBar;
