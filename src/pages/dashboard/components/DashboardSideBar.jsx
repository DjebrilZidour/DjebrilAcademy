import { getIsUserLogged } from "../../../utils/utils";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import i18n from "../../../i18n";
import { useTranslation } from "react-i18next";
const DashboardSideBar = () => {
  const { t } = useTranslation();
  let isUserLogged = getIsUserLogged();
  const [BarClosed, setBarState] = useState(false);
  const navigate = useNavigate();

  // Dynamic styles based on language
  const [flexDirection, setFlexDirection] = useState("row");
  const [textAlign, setTextAlign] = useState("left");
  const [displayNone, setDisplayNone] = useState("none");
  const [displayYes, setDisplayYes] = useState("block");

  useEffect(() => {
    const direction = i18n.language === "ar" ? "row-reverse" : "row";
    const align = i18n.language === "ar" ? "right" : "left";
    const noneDisplay = i18n.language === "ar" ? "none" : "block";
    const yesDisplay = i18n.language === "ar" ? "block" : "none";

    setFlexDirection(direction);
    setTextAlign(align);
    setDisplayNone(noneDisplay);
    setDisplayYes(yesDisplay);
  }, [i18n.language]);

  const sideBare = () => {
    setBarState(!BarClosed);
  };

  return (
    <>
      <section
        id="dashboard-side-bar"
        className="shadow-2xl rounded-2xl py-5 w-80 border-2 mt-6 h-full hidden"
        style={{ display: BarClosed ? "none" : "block" }}
      >
        <div className="flex justify-end items-center flex-end mx-4 rounded-full">
          <img
            src="https://cdn-icons-png.flaticon.com/128/2985/2985161.png"
            alt=""
            className="w-12"
            onClick={sideBare}
          />
        </div>
        <Link to="/dashboard/home">
          <div
            style={{ flexDirection }}
            className="flex items-center justify-start border-b-2"
          >
            <img
              className="w-8 m-4 cursor-pointer"
              src="https://cdn-icons-png.flaticon.com/128/3917/3917711.png"
              alt=""
            />
            <h1 className="text-3xl my-4 cursor-pointer" style={{ textAlign }}>
              {t("dashboard")}
            </h1>
          </div>
        </Link>

        <Link to="/dashboard/learning-grade">
          <div
            style={{ flexDirection }}
            className="m-4 cursor-pointer flex justify-start items-center border-b-2 pb-4"
          >
            <img
              className="w-12 mx-2 px-1"
              src="https://cdn-icons-png.flaticon.com/128/4185/4185218.png"
              alt=""
            />
            <h2 className="capitalize">{t("start_learning")}</h2>
          </div>
        </Link>
        <Link to="/dashboard/vidéos">
          <div
            style={{ flexDirection }}
            className="m-4 cursor-pointer flex justify-start items-center border-b-2 pb-4"
          >
            <img
              className="w-12 mx-2 px-1"
              src="https://cdn-icons-png.flaticon.com/128/2991/2991195.png"
              alt=""
            />
            <h2 className="capitalize">{t("interesting_videos")}</h2>
          </div>
        </Link>
        <Link to="/dashboard/educational-news">
          <div
            style={{ flexDirection }}
            className="m-4 cursor-pointer flex justify-start items-center border-b-2 pb-4"
          >
            <img
              className="w-12 mx-2 px-1"
              src="https://cdn-icons-png.flaticon.com/128/3208/3208799.png"
              alt=""
            />
            <h2 className="capitalize">{t("educational_news")}</h2>
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
                navigate("/");
              }}
            >
              Log out
            </h1>
          </div>
        </div>
      </section>

      <section style={{ display: BarClosed ? "block" : "none" }}>
        <div className="flex justify-center items-center gap-4 flex-col m-4 w-24 border-2 rounded-2xl py-4">
          <div className="flex items-center justify-end p-4 rounded-full cursor-pointer">
            <img
              className="w-8"
              src="https://cdn-icons-png.flaticon.com/128/271/271228.png"
              alt=""
              onClick={sideBare}
            />
          </div>

          <Link to="/dashboard/home">
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
